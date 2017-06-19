#if __has_include(<React/RCTBridgeModule.h>)
// React Native >= 0.40
#import <React/RCTBridgeModule.h>
else
// React Native <= 0.39
#import "RCTBridgeModule.h"
#endif
  
@interface KCKeepAwake : NSObject <RCTBridgeModule>
@end
