import Layout from "~/components/Layout/layout.component"
import ComingSoon from "~/components/ComingSoon/comingSoon.component"

export default function GuestBook() {
    return (
        <Layout title="Guestbook" logoPath="/guestbook-ico.png">
            <ComingSoon />
        </Layout>
    )
}