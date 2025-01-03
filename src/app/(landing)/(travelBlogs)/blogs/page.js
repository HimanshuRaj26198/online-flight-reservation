
"use client";

import { useRouter } from 'next/navigation';


const travelBlog = () => {

    const router = useRouter();

    const handleReadMoreClick = (e) => {
        e.preventDefault();  
        router.push("/blogData/djsdsd");
    }

    return <>

        <div className="col-lg-8">
            <div className="fl-white-bg blog-detail">
                <div className="blog-title">
                    <a
                        href="/blogs/how-to-communicate-with-lufthansa.aspx"
                        title="how to communicate with lufthansa"
                    >
                        How to communicate with Lufthansa?
                    </a>
                </div>
                <p className="text-3"></p>
                <p>
                    Whether you prefer talking to a representative directly, using the
                    live chat feature, or even sending an email, Lufthansa provides
                    multiple channels to address your needs.
                </p>
                <p />
                <a
                    href="/blogs/how-to-communicate-with-lufthansa.aspx"
                    className="read-more"
                    title="how to communicate with lufthansa"
                    onClick={(e) => handleReadMoreClick(e)}
                >
                    <i className="fas fa-chevron-right" />
                    Read More
                </a>
            </div>

        </div>
        <div className="col-lg-4 mt-4 mt-lg-0">
            <div className="shadow-md" style={{ padding: 20 }}>
                <h1 className="text-6">Recent Blog</h1>
                <div className="sidebar-contant pt-3">
                    <div className="thumb-box">
                        <figure>
                            <figcaption>
                                <div className="thumb-detail-info">
                                    <a
                                        href="/blogs/how-do-i-talk-to-a-live-person-at-aa.aspx"
                                        title="how do i talk to a live person at aa"
                                    >
                                        How Do I Talk to a Real Person on American Airlines?
                                    </a>
                                    <div className="post-info">15 Jun 2023</div>
                                </div>
                            </figcaption>
                        </figure>
                    </div>

                </div>
            </div>
        </div>
    </>
}

export default travelBlog;