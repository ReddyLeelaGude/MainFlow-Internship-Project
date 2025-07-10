package loginapp;
import javax.swing.*;

public class LoginForm extends javax.swing.JFrame {

    public LoginForm() {
        initComponents();
        setSize(400, 300);
        setLocationRelativeTo(null);
    }

    private void initComponents() {
        titleLabel = new javax.swing.JLabel();
        usernameLabel = new javax.swing.JLabel();
        passwordLabel = new javax.swing.JLabel();
        usernameField = new javax.swing.JTextField();
        passwordField = new javax.swing.JPasswordField();
        loginButton = new javax.swing.JButton();

        setDefaultCloseOperation(javax.swing.WindowConstants.EXIT_ON_CLOSE);
        setTitle("Login Page");

        titleLabel.setText("Login Page");
        titleLabel.setFont(new java.awt.Font("Arial", java.awt.Font.BOLD, 24));
        titleLabel.setHorizontalAlignment(javax.swing.SwingConstants.CENTER);

        usernameLabel.setText("Username:");
        passwordLabel.setText("Password:");

        usernameField.setToolTipText("Enter your username");
        passwordField.setToolTipText("Enter your password");

        loginButton.setText("Login");

        loginButton.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                loginButtonActionPerformed(evt);
            }
        });

        javax.swing.GroupLayout layout = new javax.swing.GroupLayout(getContentPane());
        getContentPane().setLayout(layout);

        layout.setHorizontalGroup(
            layout.createParallelGroup(javax.swing.GroupLayout.Alignment.CENTER)
            .addGroup(layout.createSequentialGroup()
                .addGap(50, 50, 50)
                .addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.TRAILING)
                    .addComponent(usernameLabel)
                    .addComponent(passwordLabel))
                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.UNRELATED)
                .addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING, false)
                    .addComponent(usernameField, javax.swing.GroupLayout.DEFAULT_SIZE, 200, Short.MAX_VALUE)
                    .addComponent(passwordField))
                .addGap(50, 50, 50))
            .addComponent(titleLabel, javax.swing.GroupLayout.DEFAULT_SIZE, 400, Short.MAX_VALUE)
            .addGroup(layout.createSequentialGroup()
                .addGap(150, 150, 150)
                .addComponent(loginButton, javax.swing.GroupLayout.PREFERRED_SIZE, 100, javax.swing.GroupLayout.PREFERRED_SIZE)
                .addContainerGap(150, Short.MAX_VALUE))
        );

        layout.setVerticalGroup(
            layout.createSequentialGroup()
            .addGap(30, 30, 30)
            .addComponent(titleLabel)
            .addGap(30, 30, 30)
            .addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                .addComponent(usernameLabel)
                .addComponent(usernameField, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE))
            .addGap(20, 20, 20)
            .addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                .addComponent(passwordLabel)
                .addComponent(passwordField, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE))
            .addGap(40, 40, 40)
            .addComponent(loginButton)
            .addContainerGap(30, Short.MAX_VALUE)
        );

        pack();
    }

    private void loginButtonActionPerformed(java.awt.event.ActionEvent evt) {
        String username = usernameField.getText();
        String password = new String(passwordField.getPassword());

        if (username.equals("admin") && password.equals("1234")) {
            JOptionPane.showMessageDialog(this, "Login Successful");
        } else {
            JOptionPane.showMessageDialog(this, "Invalid username or password");
        }
    }

    public static void main(String args[]) {
        java.awt.EventQueue.invokeLater(() -> {
            new LoginForm().setVisible(true);
        });
    }

    private javax.swing.JLabel titleLabel;
    private javax.swing.JLabel usernameLabel;
    private javax.swing.JLabel passwordLabel;
    private javax.swing.JTextField usernameField;
    private javax.swing.JPasswordField passwordField;
    private javax.swing.JButton loginButton;
}
