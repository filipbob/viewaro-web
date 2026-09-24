// Draws the four demo channel icons. Shapes only, no font, so the PNGs are
// entirely this project's own work. They are served by the site itself, at
// /app-review/tvheadend/, because Viewaro fetches channel artwork without the
// account and Tvheadend's imagecache requires one. From this folder, on a Mac:
//     swift make-icons.swift ../../public/app-review/tvheadend

import AppKit

let side: CGFloat = 256
let outputDirectory = CommandLine.arguments.dropFirst().first ?? "."

func icon(named name: String, draw: (NSRect) -> Void) throws {
    guard let bitmap = NSBitmapImageRep(
        bitmapDataPlanes: nil, pixelsWide: Int(side), pixelsHigh: Int(side),
        bitsPerSample: 8, samplesPerPixel: 4, hasAlpha: true, isPlanar: false,
        colorSpaceName: .deviceRGB, bytesPerRow: 0, bitsPerPixel: 0
    ) else { fatalError("bitmap") }
    NSGraphicsContext.saveGraphicsState()
    NSGraphicsContext.current = NSGraphicsContext(bitmapImageRep: bitmap)
    let bounds = NSRect(x: 0, y: 0, width: side, height: side)
    NSBezierPath(roundedRect: bounds, xRadius: 48, yRadius: 48).addClip()
    draw(bounds)
    NSGraphicsContext.restoreGraphicsState()
    guard let png = bitmap.representation(using: .png, properties: [:]) else {
        fatalError("png")
    }
    try png.write(to: URL(fileURLWithPath: outputDirectory).appendingPathComponent("\(name).png"))
}

func rgb(_ red: CGFloat, _ green: CGFloat, _ blue: CGFloat) -> NSColor {
    NSColor(deviceRed: red / 255, green: green / 255, blue: blue / 255, alpha: 1)
}

func fill(_ bounds: NSRect, _ color: NSColor) {
    color.setFill()
    bounds.fill()
}

// Demo Cinema: a play triangle.
try icon(named: "cinema") { bounds in
    fill(bounds, rgb(176, 38, 52))
    let play = NSBezierPath()
    play.move(to: NSPoint(x: 98, y: 72))
    play.line(to: NSPoint(x: 98, y: 184))
    play.line(to: NSPoint(x: 190, y: 128))
    play.close()
    NSColor.white.setFill()
    play.fill()
}

// Demo Animation: a five-pointed star.
try icon(named: "animation") { bounds in
    fill(bounds, rgb(92, 56, 170))
    let star = NSBezierPath()
    for index in 0..<10 {
        let radius: CGFloat = index.isMultiple(of: 2) ? 86 : 36
        let angle = CGFloat(index) * .pi / 5 + .pi / 2
        let point = NSPoint(x: 128 + radius * cos(angle), y: 124 + radius * sin(angle))
        index == 0 ? star.move(to: point) : star.line(to: point)
    }
    star.close()
    NSColor.white.setFill()
    star.fill()
}

// Demo Replay: a circular arrow.
try icon(named: "replay") { bounds in
    fill(bounds, rgb(18, 128, 124))
    let arc = NSBezierPath()
    arc.appendArc(withCenter: NSPoint(x: 128, y: 128), radius: 62,
                  startAngle: 60, endAngle: 350, clockwise: false)
    arc.lineWidth = 24
    arc.lineCapStyle = .round
    NSColor.white.setStroke()
    arc.stroke()
    let head = NSBezierPath()
    head.move(to: NSPoint(x: 190, y: 150))
    head.line(to: NSPoint(x: 212, y: 98))
    head.line(to: NSPoint(x: 160, y: 108))
    head.close()
    NSColor.white.setFill()
    head.fill()
}

// Demo Test Card: seven colour bars.
try icon(named: "testcard") { bounds in
    let bars = [rgb(192, 192, 192), rgb(192, 192, 0), rgb(0, 192, 192),
                rgb(0, 192, 0), rgb(192, 0, 192), rgb(192, 0, 0), rgb(0, 0, 192)]
    let width = side / CGFloat(bars.count)
    for (index, color) in bars.enumerated() {
        fill(NSRect(x: CGFloat(index) * width, y: 0, width: width + 1, height: side), color)
    }
}
