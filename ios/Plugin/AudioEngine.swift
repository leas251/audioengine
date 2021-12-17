import Foundation

@objc public class AudioEngine: NSObject {
    @objc public func echo(_ value: String) -> String {
        print(value)
        return value
    }
}
