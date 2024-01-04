import { Layout } from "~/layout.tsx";
import { Badge } from "~/ui/badge.tsx";
import { Html } from "carbon/html.tsx";

export default function () {
  return (
    <Html>
      <Layout>
        <Badge>Badge</Badge>
      </Layout>
    </Html>
  );
}
