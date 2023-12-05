import Inventory from "@/containers/Inventory/Inventory";
import { InventoryProvider } from "@/context/inventory-context";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <Inventory />
    </main>
  );
}
