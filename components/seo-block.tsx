import Head from "next/head";

const SEOBlock = ({title, description}: {title?: string, description?: string}) => (
    <Head>
        <title>{title}{title ? " | " : ""}Life Changing Labs</title>
        <meta name="description" content={description || "LCL an elite startup accelerator and mentorship program for the top 5% of university entrepreneurs worldwide."}/>
    </Head>
)

export default SEOBlock;