webpackHotUpdate("bundle",{

/***/ "./login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<ActionBar title=\"Groceries\"></ActionBar>\r\n\r\n<FlexboxLayout>\r\n  <StackLayout class=\"form\">\r\n    <Image src=\"~/images/logo.png\"></Image>\r\n\r\n    <TextField hint=\"Email Address\" keyboardType=\"email\"\r\n    autocorrect=\"false\" autocapitalizationType=\"none\"\r\n    [(ngModel)]=\"user.email\" class=\"input input-border\"></TextField>\r\n  <TextField hint=\"Password\" secure=\"true\"\r\n    [(ngModel)]=\"user.password\" class=\"input input-border\"></TextField>\r\n\r\n      <Button [text]=\"isLoggingIn ? 'Sign in' : 'Sign up'\"\r\n      class=\"btn btn-primary\" (tap)=\"submit()\"></Button>\r\n    <Button [text]=\"isLoggingIn ? 'Sign up' : 'Back to login'\"\r\n      (tap)=\"toggleDisplay()\"></Button>\r\n  </StackLayout>\r\n</FlexboxLayout>"

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9sb2dpbi9sb2dpbi5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLG14QiIsImZpbGUiOiJidW5kbGUuMjAwY2QzNzAyYTk3MTBiMjlhNjAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gXCI8QWN0aW9uQmFyIHRpdGxlPVxcXCJHcm9jZXJpZXNcXFwiPjwvQWN0aW9uQmFyPlxcclxcblxcclxcbjxGbGV4Ym94TGF5b3V0PlxcclxcbiAgPFN0YWNrTGF5b3V0IGNsYXNzPVxcXCJmb3JtXFxcIj5cXHJcXG4gICAgPEltYWdlIHNyYz1cXFwifi9pbWFnZXMvbG9nby5wbmdcXFwiPjwvSW1hZ2U+XFxyXFxuXFxyXFxuICAgIDxUZXh0RmllbGQgaGludD1cXFwiRW1haWwgQWRkcmVzc1xcXCIga2V5Ym9hcmRUeXBlPVxcXCJlbWFpbFxcXCJcXHJcXG4gICAgYXV0b2NvcnJlY3Q9XFxcImZhbHNlXFxcIiBhdXRvY2FwaXRhbGl6YXRpb25UeXBlPVxcXCJub25lXFxcIlxcclxcbiAgICBbKG5nTW9kZWwpXT1cXFwidXNlci5lbWFpbFxcXCIgY2xhc3M9XFxcImlucHV0IGlucHV0LWJvcmRlclxcXCI+PC9UZXh0RmllbGQ+XFxyXFxuICA8VGV4dEZpZWxkIGhpbnQ9XFxcIlBhc3N3b3JkXFxcIiBzZWN1cmU9XFxcInRydWVcXFwiXFxyXFxuICAgIFsobmdNb2RlbCldPVxcXCJ1c2VyLnBhc3N3b3JkXFxcIiBjbGFzcz1cXFwiaW5wdXQgaW5wdXQtYm9yZGVyXFxcIj48L1RleHRGaWVsZD5cXHJcXG5cXHJcXG4gICAgICA8QnV0dG9uIFt0ZXh0XT1cXFwiaXNMb2dnaW5nSW4gPyAnU2lnbiBpbicgOiAnU2lnbiB1cCdcXFwiXFxyXFxuICAgICAgY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeVxcXCIgKHRhcCk9XFxcInN1Ym1pdCgpXFxcIj48L0J1dHRvbj5cXHJcXG4gICAgPEJ1dHRvbiBbdGV4dF09XFxcImlzTG9nZ2luZ0luID8gJ1NpZ24gdXAnIDogJ0JhY2sgdG8gbG9naW4nXFxcIlxcclxcbiAgICAgICh0YXApPVxcXCJ0b2dnbGVEaXNwbGF5KClcXFwiPjwvQnV0dG9uPlxcclxcbiAgPC9TdGFja0xheW91dD5cXHJcXG48L0ZsZXhib3hMYXlvdXQ+XCIiXSwic291cmNlUm9vdCI6IiJ9