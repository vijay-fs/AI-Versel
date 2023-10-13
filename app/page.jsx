import React, { useEffect } from "react";
import Feed from "@components/Feed";

const Home = () => {
    return(
        <section className="w-full flex-center flex-col">
            <h1 className="head_text text-center">Discover and share <br className="max-md:hidden"/><span className="orange_gradient text-center">AI-Powered Prompts</span></h1>
            <p className="desc text-center">Vercel-AI is a community of writers, poets, and artists who use AI to create new works.</p>
            <Feed/>
            </section>
    )
    }

export default Home;