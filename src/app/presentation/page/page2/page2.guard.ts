import { inject } from "@angular/core"
import { CommonNavigationService } from "src/app/service/navigation/commonNavigation.component"

export const page2Guard = () => {
  const navigation = inject( CommonNavigationService );
  let routeId = navigation.currentCall.substring(7);
    
  return { id: routeId }
  }