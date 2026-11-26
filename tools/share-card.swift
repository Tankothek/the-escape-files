import AppKit
import CoreText
import ImageIO
import UniformTypeIdentifiers

struct Card: Decodable {
    let id: String
    let week: String
    let title: String
    let source: String
    let output: String
}

enum CardError: Error {
    case unreadableCover(String)
    case canvas
    case write(String)
}

func color(_ rgb: UInt32) -> NSColor {
    NSColor(
        srgbRed: CGFloat((rgb >> 16) & 255) / 255,
        green: CGFloat((rgb >> 8) & 255) / 255,
        blue: CGFloat(rgb & 255) / 255,
        alpha: 1
    )
}

func drawText(_ text: String, in rect: CGRect, size: CGFloat, weight: NSFont.Weight,
              tint: NSColor, context: CGContext) {
    let paragraph = NSMutableParagraphStyle()
    paragraph.lineSpacing = 6
    paragraph.lineBreakMode = .byWordWrapping
    var fontSize = size
    while fontSize >= 20 {
        let attributed = NSAttributedString(string: text, attributes: [
            .font: NSFont.systemFont(ofSize: fontSize, weight: weight),
            .foregroundColor: tint,
            .paragraphStyle: paragraph
        ])
        let setter = CTFramesetterCreateWithAttributedString(attributed)
        let constraint = CGSize(width: rect.width, height: CGFloat.greatestFiniteMagnitude)
        let required = CTFramesetterSuggestFrameSizeWithConstraints(setter, CFRange(), nil, constraint, nil)
        if required.height <= rect.height || fontSize == 20 {
            let frame = CTFramesetterCreateFrame(setter, CFRange(), CGPath(rect: rect, transform: nil), nil)
            CTFrameDraw(frame, context)
            return
        }
        fontSize = max(20, fontSize - 2)
    }
}

func render(_ card: Card) throws {
    guard
        let source = CGImageSourceCreateWithURL(URL(fileURLWithPath: card.source) as CFURL, nil),
        let cover = CGImageSourceCreateImageAtIndex(source, 0, nil)
    else { throw CardError.unreadableCover(card.source) }

    let width = 1200
    let height = 628
    let bounds = CGRect(x: 0, y: 0, width: width, height: height)
    let space = CGColorSpace(name: CGColorSpace.sRGB)!
    guard let context = CGContext(data: nil, width: width, height: height, bitsPerComponent: 8,
                                  bytesPerRow: 0, space: space,
                                  bitmapInfo: CGImageAlphaInfo.premultipliedLast.rawValue)
    else { throw CardError.canvas }
    let gradientColors = [color(0x080B12).cgColor, color(0x1A2030).cgColor] as CFArray
    guard let gradient = CGGradient(colorsSpace: space, colors: gradientColors, locations: [0, 1])
    else { throw CardError.canvas }
    context.drawLinearGradient(gradient, start: .zero,
                               end: CGPoint(x: width, y: height), options: [.drawsAfterEndLocation])

    let coverArea = CGRect(x: 40, y: 34, width: 462, height: 560)
    let scale = min(coverArea.width / CGFloat(cover.width), coverArea.height / CGFloat(cover.height))
    let imageSize = CGSize(width: CGFloat(cover.width) * scale, height: CGFloat(cover.height) * scale)
    let imageRect = CGRect(x: coverArea.midX - imageSize.width / 2, y: coverArea.midY - imageSize.height / 2,
                           width: imageSize.width, height: imageSize.height)
    context.interpolationQuality = .high
    context.draw(cover, in: imageRect)

    let gold = color(0xFFCD75)
    context.setFillColor(color(0x745B38).cgColor)
    context.fill(CGRect(x: 538, y: 78, width: 2, height: bounds.height - 156))
    drawText("THE ESCAPE FILES", in: CGRect(x: 578, y: 460, width: 566, height: 58),
             size: 32, weight: .heavy, tint: gold, context: context)
    drawText("FILE \(card.id)  ·  WEEK \(card.week)",
             in: CGRect(x: 578, y: 392, width: 566, height: 46),
             size: 21, weight: .semibold, tint: gold, context: context)
    drawText(card.title, in: CGRect(x: 575, y: 162, width: 568, height: 219),
             size: 54, weight: .bold, tint: color(0xF3F6FC), context: context)
    drawText("TANKOTHEK", in: CGRect(x: 578, y: 64, width: 566, height: 38),
             size: 20, weight: .medium, tint: color(0xAAB4C7), context: context)

    guard
        let image = context.makeImage(),
        let destination = CGImageDestinationCreateWithURL(URL(fileURLWithPath: card.output) as CFURL,
                                                          UTType.jpeg.identifier as CFString, 1, nil)
    else { throw CardError.write(card.output) }
    let quality = [kCGImageDestinationLossyCompressionQuality: 0.9] as CFDictionary
    CGImageDestinationAddImage(destination, image, quality)
    guard CGImageDestinationFinalize(destination) else { throw CardError.write(card.output) }
}

let cards = try JSONDecoder().decode([Card].self, from: FileHandle.standardInput.readDataToEndOfFile())
for card in cards {
    try render(card)
}
