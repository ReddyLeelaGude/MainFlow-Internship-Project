package ui;
import db.DBConnection;
import model.Buyer;
import javax.swing.*;
import java.awt.*;
import java.awt.event.*;
import java.sql.*;
public class BuyerPanel extends JPanel {
    private JTextField nameField, emailField, phoneField, addressField;
    private JButton addButton, deleteButton;
    private JTextArea outputArea;
    public BuyerPanel() {
        setLayout(new BorderLayout());
        JPanel inputPanel = new JPanel(new GridLayout(5, 2));
        nameField = new JTextField(); emailField = new JTextField();
        phoneField = new JTextField(); addressField = new JTextField();
        outputArea = new JTextArea(10, 40);
        addButton = new JButton("Add Buyer");
        deleteButton = new JButton("Delete Buyer by Name");

        inputPanel.add(new JLabel("Name:")); inputPanel.add(nameField);
        inputPanel.add(new JLabel("Email:")); inputPanel.add(emailField);
        inputPanel.add(new JLabel("Phone:")); inputPanel.add(phoneField);
        inputPanel.add(new JLabel("Address:")); inputPanel.add(addressField);
        inputPanel.add(addButton); inputPanel.add(deleteButton);
        add(inputPanel, BorderLayout.NORTH); add(new JScrollPane(outputArea), BorderLayout.CENTER);

        addButton.addActionListener(e -> {
            try (Connection conn = DBConnection.getConnection()) {
                PreparedStatement ps = conn.prepareStatement("INSERT INTO buyers(name, email, phone, address) VALUES (?, ?, ?, ?)");
                ps.setString(1, nameField.getText());
                ps.setString(2, emailField.getText());
                ps.setString(3, phoneField.getText());
                ps.setString(4, addressField.getText());
                ps.executeUpdate();
                outputArea.setText("Buyer Added Successfully!");
            } catch (Exception ex) {
                outputArea.setText("Error: " + ex.getMessage());
            }
        });

        deleteButton.addActionListener(e -> {
            try (Connection conn = DBConnection.getConnection()) {
                PreparedStatement ps = conn.prepareStatement("DELETE FROM buyers WHERE name = ?");
                ps.setString(1, nameField.getText());
                int rows = ps.executeUpdate();
                outputArea.setText(rows > 0 ? "Buyer Deleted!" : "Buyer Not Found.");
            } catch (Exception ex) {
                outputArea.setText("Error: " + ex.getMessage());
            }
        });
    }
}