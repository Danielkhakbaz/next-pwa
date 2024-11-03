import { PushNotificationManager } from "@/lib/utils/push-notification";
import { InstallPrompt } from "@/lib/utils/install-prompt";

const HomePage = async () => {
  return (
    <div>
      <PushNotificationManager />
      <InstallPrompt />
    </div>
  );
};

export default HomePage;
