'Browser("OrangeHRM").Page("OrangeHRM").WebElement("Username").Click
Browser("OrangeHRM").Page("OrangeHRM").WebEdit("txtUsername").Set "Admin"
Browser("OrangeHRM").Page("OrangeHRM").WebEdit("txtPassword").SetSecure "5aa77389902996e4650e6c96e7623dbe"
Browser("OrangeHRM").Page("OrangeHRM").WebButton("LOGIN").Click
Browser("OrangeHRM").Page("OrangeHRM_2").Link("Welcome Admin").Click
Browser("OrangeHRM").Page("OrangeHRM_2").Link("Logout").Click
