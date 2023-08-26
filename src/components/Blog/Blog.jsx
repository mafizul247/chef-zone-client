import React from 'react';
import { Container } from 'react-bootstrap';
import useTitle from '../../hooks/useTitle';

const Blog = () => {
    useTitle('Blog');
    return (
        <Container>
            <h2 className='text-center my-2'>Blog Section</h2>
            <div className='my-2 '>
                <h4>1. What is the differences between and controlled components.</h4>
                <p>
                    In React, the terms <strong>"controlled component" </strong> and <strong>"uncontrolled component"</strong> refer to the way that data flows through the component. <br /><br />
                    A <strong>controlled component</strong> is one where the value of the input field is controlled by React state. This means that every time the user interacts with the input field. React updates its internal state to reflect the new value of the input. Because the state is always in sync with the value of the input, the component has complete control over the value. <br /> <br />

                    An <strong>uncontrolled component</strong>, on the other hand, is one where the value of the input field is handled by the DOM. This means that React does not control the value of the input, and has no way of knowing what the value is at any given time. Instead, the DOM is responsible for handling user input and updating the value of the input field. <br /><br />

                    The main differences between controlled and uncontrolled components are: <br /> <br />
                    <ol>
                        <li>
                            In a <strong>controlled component</strong>, React state is used to keep track of the value of the input field, whereas in an <strong>uncontrolled component</strong>, the value is managed by the DOM.
                        </li>
                        <li>
                            <strong>Controlled components</strong> are generally easier to test and debug because the component has full control over the value of the input field.
                        </li>
                        <li>
                            <strong>Uncontrolled components</strong> are useful when you want to allow the user to have full control over the value of the input field, such as when you want to implement a search field that updates the results in real-time.
                        </li>
                        <li>
                            <strong>Controlled components</strong> are generally more performant because React can optimize the rendering of the component based on its internal state. In an <strong>uncontrolled component</strong>, the DOM has to handle all updates to the value of the input field, which can be less efficient.
                        </li>
                    </ol>
                    Overall, the choice between using a controlled or uncontrolled component depends on the specific use case and requirements of the component. Controlled components are generally recommended when possible, as they offer better control and performance, but uncontrolled components can be useful in certain situations where you need to allow the user more control over the input field.
                </p>
            </div>
            <div className='my-2'>
                <h4>2. How to validate React props using PropTypes</h4>
                <p>
                    We can use React props, short for properties, to send data from one component to another. If a component receives the wrong type of props, it can cause bugs and unexpected errors in your app. <br /> <br />

                    React has an internal mechanism for props validation called PropTypes. In this article, we’ll learn how to validate props with React PropTypes.
                </p>
            </div>
            <div className='my-2'>
                <h4>3. What is the difference between nodejs and express js.</h4>
                <p>
                    Node.js is a JavaScript runtime environment that allows developers to run JavaScript code outside of a web browser, while Express.js is a web framework built on top of Node.js that makes it easier to build web applications and APIs.<br /> <br />

                    Node.js provides a low-level platform for building networked applications using JavaScript. It provides a rich set of features such as a built-in HTTP server, a module system for managing dependencies, and APIs for working with file systems, databases, and network sockets. Node.js also provides an event-driven, non-blocking I/O model that makes it possible to handle a large number of connections concurrently with low resource usage.<br /> <br />

                    Express.js is a lightweight web framework built on top of Node.js that provides a set of tools and features for building web applications and APIs. It provides a simpler and more expressive way to handle HTTP requests and responses, manage routes, handle errors, and work with middleware. Express.js provides a thin layer of abstraction on top of Node.js that makes it easier to build scalable web applications.<br /> <br />

                    In summary, while Node.js provides a low-level platform for building networked applications using JavaScript, Express.js is a web framework built on top of Node.js that provides a higher-level API for building web applications and APIs. Express.js provides a simpler and more expressive way to handle HTTP requests and responses, manage routes, handle errors, and work with middleware, which can help speed up development time and make it easier to build scalable web applications.<br /> <br />
                </p>
            </div>
            <div className='my-2'>
                <h4>4. What is a custom hook, and why will you create a custom hook?</h4>
                <p>
                    Node.js is a JavaScript runtime environment that allows developers to run JavaScript code outside of a web browser, while Express.js is a web framework built on top of Node.js that makes it easier to build web applications and APIs.<br /> <br />

                    Node.js provides a low-level platform for building networked applications using JavaScript. It provides a rich set of features such as a built-in HTTP server, a module system for managing dependencies, and APIs for working with file systems, databases, and network sockets. Node.js also provides an event-driven, non-blocking I/O model that makes it possible to handle a large number of connections concurrently with low resource usage.<br /> <br />

                    Express.js is a lightweight web framework built on top of Node.js that provides a set of tools and features for building web applications and APIs. It provides a simpler and more expressive way to handle HTTP requests and responses, manage routes, handle errors, and work with middleware. Express.js provides a thin layer of abstraction on top of Node.js that makes it easier to build scalable web applications.<br /> <br />

                    In summary, while Node.js provides a low-level platform for building networked applications using JavaScript, Express.js is a web framework built on top of Node.js that provides a higher-level API for building web applications and APIs. Express.js provides a simpler and more expressive way to handle HTTP requests and responses, manage routes, handle errors, and work with middleware, which can help speed up development time and make it easier to build scalable web applications.
                </p>
            </div>
        </Container>
    );
};

export default Blog;