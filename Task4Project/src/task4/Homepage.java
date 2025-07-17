package task4;

import javax.swing.*;
import java.awt.event.ActionEvent;

public class Homepage extends JFrame {
    private JLabel titleLabel, userGreeting;
    private JButton viewProfileButton, settingsButton, logoutButton;

    public Homepage() {
        setTitle("Homepage");
        setSize(400, 300);
        setDefaultCloseOperation(EXIT_ON_CLOSE);
        setLocationRelativeTo(null);
        setLayout(null);

        titleLabel = new JLabel("Welcome to the Homepage", SwingConstants.CENTER);
        titleLabel.setBounds(50, 20, 300, 30);
        add(titleLabel);

        userGreeting = new JLabel("Hello, User!", SwingConstants.CENTER);
        userGreeting.setBounds(50, 60, 300, 20);
        add(userGreeting);

        viewProfileButton = new JButton("View Profile");
        viewProfileButton.setBounds(125, 100, 150, 30);
        add(viewProfileButton);

        settingsButton = new JButton("Settings");
        settingsButton.setBounds(125, 140, 150, 30);
        add(settingsButton);

        logoutButton = new JButton("Logout");
        logoutButton.setBounds(125, 180, 150, 30);
        logoutButton.addActionListener(this::logoutButtonActionPerformed);
        add(logoutButton);
    }

    private void logoutButtonActionPerformed(ActionEvent evt) {
        this.dispose();
        // new LoginForm().setVisible(true); // Uncomment if LoginForm exists
        System.out.println("Logout clicked");
    }

    public static void main(String[] args) {
        new Homepage().setVisible(true);
    }
}
