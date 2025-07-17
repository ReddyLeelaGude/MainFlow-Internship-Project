import javax.swing.*;
import ui.ProductPanel;
import ui.BuyerPanel;
public class Main {
    public static void main(String[] args) {
        JFrame frame = new JFrame("Task 5 - Product & Buyer Manager");
        JTabbedPane tabbedPane = new JTabbedPane();
        tabbedPane.addTab("Product", new ProductPanel());
        tabbedPane.addTab("Buyer", new BuyerPanel());
        frame.add(tabbedPane);
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.setSize(600, 400);
        frame.setVisible(true);
    }
}