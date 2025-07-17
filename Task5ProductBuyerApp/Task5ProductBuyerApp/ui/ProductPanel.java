package ui;
import db.DBConnection;
import model.Product;
import javax.swing.*;
import java.awt.*;
import java.awt.event.*;
import java.sql.*;
public class ProductPanel extends JPanel {
    private JTextField nameField, categoryField, priceField, quantityField, descField;
    private JButton addButton, deleteButton;
    private JTextArea outputArea;
    public ProductPanel() {
        setLayout(new BorderLayout());
        JPanel inputPanel = new JPanel(new GridLayout(6, 2));
        nameField = new JTextField(); categoryField = new JTextField();
        priceField = new JTextField(); quantityField = new JTextField();
        descField = new JTextField(); outputArea = new JTextArea(10, 40);
        addButton = new JButton("Add Product");
        deleteButton = new JButton("Delete Product by Name");

        inputPanel.add(new JLabel("Name:")); inputPanel.add(nameField);
        inputPanel.add(new JLabel("Category:")); inputPanel.add(categoryField);
        inputPanel.add(new JLabel("Price:")); inputPanel.add(priceField);
        inputPanel.add(new JLabel("Quantity:")); inputPanel.add(quantityField);
        inputPanel.add(new JLabel("Description:")); inputPanel.add(descField);
        inputPanel.add(addButton); inputPanel.add(deleteButton);
        add(inputPanel, BorderLayout.NORTH); add(new JScrollPane(outputArea), BorderLayout.CENTER);

        addButton.addActionListener(e -> {
            try (Connection conn = DBConnection.getConnection()) {
                PreparedStatement ps = conn.prepareStatement("INSERT INTO products(name, category, price, quantity, description) VALUES (?, ?, ?, ?, ?)");
                ps.setString(1, nameField.getText());
                ps.setString(2, categoryField.getText());
                ps.setDouble(3, Double.parseDouble(priceField.getText()));
                ps.setInt(4, Integer.parseInt(quantityField.getText()));
                ps.setString(5, descField.getText());
                ps.executeUpdate();
                outputArea.setText("Product Added Successfully!");
            } catch (Exception ex) {
                outputArea.setText("Error: " + ex.getMessage());
            }
        });

        deleteButton.addActionListener(e -> {
            try (Connection conn = DBConnection.getConnection()) {
                PreparedStatement ps = conn.prepareStatement("DELETE FROM products WHERE name = ?");
                ps.setString(1, nameField.getText());
                int rows = ps.executeUpdate();
                outputArea.setText(rows > 0 ? "Product Deleted!" : "Product Not Found.");
            } catch (Exception ex) {
                outputArea.setText("Error: " + ex.getMessage());
            }
        });
    }
}