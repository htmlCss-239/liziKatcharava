
const signUpForm = document.querySelector(".sign-up form");
const signInForm = document.querySelector(".sign-in form");


signUpForm.addEventListener("submit", function(e) {
    e.preventDefault();

    const name = signUpForm.querySelector('input[type="text"]').value.trim();
    const email = signUpForm.querySelector('input[type="email"]').value.trim();
    const password = signUpForm.querySelector('input[type="password"]').value.trim();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (name === "" || email === "" || password === "") {
        alert("გთხოვთ, შეავსოთ ყველა ველი!");
        return;
    }

    if (!emailRegex.test(email)) {
        alert("გთხოვთ, შეიყვანოთ ვალიდური ელ. ფოსტა!");
        return;
    }

    if (password.length < 6) {
        alert("პაროლი უნდა იყოს მინიმუმ 6 სიმბოლო!");
        return;
    }

    alert("რეგისტრაცია წარმატებით განხორციელდა!");
    signUpForm.reset();
});


signInForm.addEventListener("submit", function(e) {
    e.preventDefault();

    const email = signInForm.querySelector('input[type="email"]').value.trim();
    const password = signInForm.querySelector('input[type="password"]').value.trim();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email === "" || password === "") {
        alert("გთხოვთ, შეავსოთ ყველა ველი!");
        return;
    }

    if (!emailRegex.test(email)) {
        alert("გთხოვთ, შეიყვანოთ ვალიდური ელ. ფოსტა!");
        return;
    }

    alert("სისტემაში შესვლა წარმატებით განხორციელდა!");
    signInForm.reset();
});
