export default function Head() {
  return (
    <>
      <title>VIT NPTEL Quiz Hub</title>
      <meta name="description" content="A platform for VIT Chennai students to practice NPTEL quizzes." />

      {/* Open Graph */}
      <meta property="og:title" content="VIT NPTEL Quiz Hub" />
      <meta property="og:description" content="Practice NPTEL quizzes and Ace the exam!" />
      <meta property="og:image" content="https://nptel-vit.vercel.app/og-image.png" />
      <meta property="og:url" content="https://nptel-vit.vercel.app" />
      <meta property="og:site_name" content="VIT NPTEL Quiz Hub" />
      <meta property="og:type" content="website" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="VIT NPTEL Quiz Hub" />
      <meta name="twitter:description" content="Practice NPTEL quizzes and Ace the exam!" />
      <meta name="twitter:image" content="https://nptel-vit.vercel.app/og-image.png" />
    </>
  );
}
