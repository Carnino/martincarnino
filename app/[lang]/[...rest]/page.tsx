import { notFound } from "next/navigation"

// Any deeper path (/foo/bar, /es/anything) renders the custom 404.
export default function CatchAll() {
    notFound()
}
