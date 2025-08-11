//var
var myName = "shanka";
myName = "Prabhath";

//print variable
console.log(myName);

//camal case / pascal case / snake case / kebab case / dash case / dot case / space case / hyphen case / underscore case 

// 1. camelCase (JavaScript variables/functions)
let userProfileData = "value";

// 2. PascalCase (Class names in OOP)
let UserProfileData = "value";

// 3. snake_case (Python, Ruby, databases)
let user_profile_data = "value";

// 4. kebab-case (HTML/CSS classes, URLs)
// Note: Not valid as JS variable name
//let user-profile-data = "value";  // Syntax error in JS
// Usage in HTML: <div class="user-profile-data">

// 5. UPPER_SNAKE_CASE (Constants)
const USER_PROFILE_DATA = "value";

// 6. dot.case (config files, some CSS)
// Not valid as JS variable
//let user.profile.data = "value";  // Syntax error
// Usage in CSS: .user.profile.data { }

// 7. space case (Display text)
//let "user profile data" = "value";  // Invalid syntax
// Usage in UI: Display as "User Profile Data"

// 8. Train-Case (rare, some CSS frameworks)
//et User-Profile-Data = "value";  // Syntax error
// Usage in CSS: .User-Profile-Data { }

// 9. lowercase (CSS properties)
let userprofiledata = "value";  // Valid but not recommended
// Usage in CSS: text-transform: lowercase;

// 10. COBOL-CASE (legacy systems)
//let USER-PROFILE-DATA = "value";  // Syntax error in JS



//let

let myName2 = "shanka 02";
myName2 = "Prabhath 02";
console.log(myName2);

//const

const myName3 = "shanka 03";
//myName3 = "Prabhath 03"; // Syntax error why? this is not allowed  cannot redeclare
console.log(myName3);

//block scope
{
  let myName4 = "shanka 04";
  myName4 = "Prabhath 04";
  console.log(myName4);
}

//  console.log(myName4);  //only use in block scope


//without assigning value
let myName5;
console.log(myName5);
myName5 = "shanka 05";
myName5 = "Prabhath 05";
console.log(myName5);
