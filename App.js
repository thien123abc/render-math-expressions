import React from "react";
import MathRenderer from "./MathMarkdown";

const htmlString = `
<p>Dưới đây là một số công thức toán học cơ bản:</p>
<ol>
<li><p><strong>Công thức diện tích hình chữ nhật</strong>:<br>( A = l \\times w )<br>Trong đó ( A ) là diện tích, ( l ) là chiều dài, và ( w ) là chiều rộng.</p></li>
</ol>
<p>Nếu bạn cần thêm công thức nào khác, hãy cho tôi biết nhé!</p>
`;
// const htmlString = `
// <p>Dưới đây là một số công thức toán học cơ bản:</p>
// <ol>
// <li><p><strong>Công thức diện tích hình chữ nhật</strong>:<br>( A = l \times w )<br>Trong đó ( A ) là diện tích, ( l ) là chiều dài, và ( w ) là chiều rộng.</p>
// </li>
// <li><p><strong>Công thức chu vi hình tròn</strong>:<br>( C = 2 \times \pi \times r )<br>Trong đó ( C ) là chu vi và ( r ) là bán kính.</p>
// </li>
// <li><p><strong>Công thức diện tích hình tròn</strong>:<br>( A = \pi \times r^2 )<br>Trong đó ( A ) là diện tích và ( r ) là bán kính.</p>
// </li>
// <li><p><strong>Định lý Pythagore</strong> (cho tam giác vuông):<br>( a^2 + b^2 = c^2 )<br>Trong đó ( c ) là cạnh huyền và ( a, b ) là hai cạnh góc vuông.</p>
// </li>
// <li><p><strong>Công thức tính trung bình cộng</strong>:<br>( \bar{x} = \frac{x_1 + x_2 + \ldots + x_n}{n} )<br>Trong đó ( \bar{x} ) là giá trị trung bình, ( x_1, x_2, \ldots, x_n ) là các giá trị và ( n ) là số lượng giá trị.</p>
// </li>
// </ol>
// <p>Nếu bạn cần thêm công thức nào khác, hãy cho tôi biết nhé!</p>
// `;

const App = () => {
  const html = htmlString.replace(/\(/g, "\\(").replace(/\)/g, "\\)");
  console.log("html", html);

  return (
    <div style={{ padding: "20px" }}>
      <MathRenderer htmlContent={html} />
    </div>
  );
};

export default App;
