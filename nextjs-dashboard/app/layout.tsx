import '@/app/ui/global.css';
import styles from '@/app/ui/home.module.css';
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}
      <div className={styles.shape} />;</body>
    </html>
  );
}
