import { Layout } from "~/layout.tsx";
import { Alert, AlertDescription, AlertTitle } from "~/ui/alert.tsx";
import { Icon } from "~/ui/icon.tsx";
import { Html } from "carbon/html.tsx";

export default function () {
  return (
    <Html>
      <Layout>
        <Alert>
          <Icon name="rocket" class="h-4 w-4" />
          <AlertTitle>Heads up!</AlertTitle>
          <AlertDescription>
            You can add components to your app using the cli.
          </AlertDescription>
        </Alert>
      </Layout>
    </Html>
  );
}
