Browser("OrangeHRM").Page("OrangeHRM").WebEdit("txtUsername").Set "Admin"
Browser("OrangeHRM").Page("OrangeHRM").WebEdit("txtPassword").SetSecure "5aa773da0677d3913ef7c89fac12f57a"
Browser("OrangeHRM").Page("OrangeHRM").WebButton("LOGIN").Click
Browser("OrangeHRM").Page("OrangeHRM_2").Link("PIM").Click
Browser("OrangeHRM").Page("OrangeHRM_3").Link("Add Employee").Click
Browser("OrangeHRM").Page("OrangeHRM_4").WebEdit("firstName").Set "test"
Browser("OrangeHRM").Page("OrangeHRM_4").WebEdit("lastName").Set "test1"
Browser("OrangeHRM").Page("OrangeHRM_4").WebButton("Save").Click
Browser("OrangeHRM").Page("OrangeHRM_5").WebElement("Personal Details").Check CheckPoint("Personal Details")
Browser("OrangeHRM").Page("OrangeHRM_5").Link("Welcome Admin").Click
Browser("OrangeHRM").Page("OrangeHRM_5").Link("Logout").Click
