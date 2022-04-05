import { CheckCircleIcon } from "@heroicons/react/solid";
import React from "react";

const Blog = () => {
  return (
    <div className="pt-4 container mx-auto">
      <h2 className="text-5xl font-bold text-red-600">React FAQ</h2>

      <section className="py-4">
        <div className="border-2 p-3 rounded-md mt-4">
          <span className="text-4xl font-mono text-gray-500">
            {" "}
            Question{" "}
            <h1 className="text-5xl text-gray-700 font-semibold">
              {" "}
              What is Context API in React ?
            </h1>{" "}
          </span>
          <p className="text-gray-800 mt-4 text-left font-serif text-2xl">
            The React Context API is a way to effectively create global
            variables for a React app that can be passed around. This is an
            alternative to "prop drilling" or moving props from grandparents to
            children to parents. The context is also referred to as a simple,
            light method for managing the state using Redox.
            React.createContext() is all we need. It returns a consumer and a
            provider. Provider is a component that as it's names suggests
            provides the state to its children. It will hold the "store" and be
            the parent of all the components that might need that store.
          </p>
        </div>
        <div className="border-2 p-3 rounded-md mt-4">
          <span className="text-4xl font-mono text-gray-500">
            {" "}
            Question{" "}
            <h1 className="text-5xl text-gray-700 font-semibold">
              {" "}
              Difference between inline, block, inline-block  
            </h1>{" "}
          </span>
          <p className="text-gray-800 mt-4 text-left font-serif text-2xl">
            <h1 className="text-2xl font-bold">Inline</h1>
            <p className="text-2xl font-light">Inline elements dose not start on a new line and only occupy just the width it requires. You cannot set the width or height.</p>
            <h1 className="text-2xl font-bold">Example:</h1>
            <ul>
                <li>Img tag</li>
                <li>anchor tag</li>
                <li>Button tag</li>
            </ul>
          </p>
          <p className="text-gray-800 mt-4 text-left font-serif text-2xl">
            <h1 className="text-2xl font-bold">Block</h1>
            <p className="text-2xl font-light">Block elements will start on a new line and ouccypy the full width available and you can set also width and height values.</p>
            <h1 className="text-2xl font-bold">Example:</h1>
            <ul>
                <li>p tag</li>
                <li>heading tag (h1,h2,h3,h4,h5,h6)</li>
                <li>ol, li, tag</li>
                <li>etc</li>
            </ul>
          </p>
          <p className="text-gray-800 mt-4 text-left font-serif text-2xl">
            <h1 className="text-2xl font-bold">Inline-block</h1>
            <p className="text-2xl font-light">Inline-block formatted just like the inline element, where it doesnot start on a new line. But you can set width and height values.</p>
            <h1 className="text-2xl font-bold">Example:</h1>
            <ul>
                <li>span tag</li>
                <li>strong tag</li>
                <li>etc</li>
            </ul>
          </p>
        </div>
        <div className="border-2 p-3 rounded-md mt-4">
          <span className="text-4xl font-mono text-gray-500">
            {" "}
            Question{" "}
            <h1 className="text-5xl text-gray-700 font-semibold">
              {" "}
              What is Semantic Tag ?
            </h1>{" "}
          </span>
          <p className="text-gray-800 mt-4 text-left font-serif text-2xl">
          A semantic elemen A semantic element clearly describes its meaning to both the browser and the developer. Examples of nonsemantic elements: div, span, Tells nothing about its content. Examples of semantic elements: form, table, article etc. So, semantic tags define the purpose of the element. By using semantic markup, you help the browser understand the meaning of the content instead of just displaying it. By providing this extra level of clarity, HTML5 semantic elements also help search engines to read the page and find the required information faster.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Blog;
