import { Metadata } from 'next'
import {
    FaCode, FaPaintBrush, FaServer, FaCloud, FaUsers,
    FaBug, FaClock, FaCheckCircle, FaLaptopCode
} from 'react-icons/fa'
import { HiOutlineShieldCheck, HiOutlineTrendingUp } from 'react-icons/hi'

import PageBanner from '../../components/PageBanner'

export const metadata: Metadata = {
    title: 'Staff Augmentation Services',
    description: 'Scale your team fast. Highlight speed, expertise, and flexibility.  Our staff augmentation services let you hire app developers, AI experts, and UX designers. Get the top talent you need, seamlessly.',
    keywords: 'staff augmentation, remote developers, software development,hire app developers, staff augmentation services',
    authors: { name: 'Bytewise Technologies', url: 'https://bytewisetechnologies.com' },
    openGraph: {
        locale: 'en_US',
        type: 'website',
        title: 'Staff Augmentation Services',
        description: 'Scale your team fast. Highlight speed, expertise, and flexibility.  Our staff augmentation services let you hire app developers, AI experts, and UX designers. Get the top talent you need, seamlessly.',
        url: 'https://bytewisetechnologies.com/staff-augmentation',
        siteName: 'Bytewise Technologies',
    },
    alternates: {
        canonical: 'https://bytewisetechnologies.com/staff-augmentation',
    }
}

export default function StaffAugmentationPage() {
    return (
        <>
            <PageBanner
                title="Staff Augmentation"
                breadcrumb={[
                    { name: 'Home', url: '/' },
                    { name: 'Staff Augmentation' },
                ]}
            />

            <section className="bg-light py-5">
                <div className="container">
                    {/* Intro Section */}
                    <div className="row justify-content-center mb-4">
                        <div className="col-lg-8 text-center">
                            <h2 className="display-5 fw-bold mb-3">Is Staff Augmentation Your Solution?</h2>
                            <p className="lead text-muted mb-0">
                                We’re here to help you maximize your ROI and navigate any challenges, ensuring your augmented team member becomes a true asset.
                            </p>
                        </div>
                    </div>

                    {/* What & Why Section */}
                    <div className="row g-4 mb-5">
                        <div className="col-lg-12">
                            <div className='p-4' >
                                <h3 className="h4 mb-3  " style={{ color: '#020842' }}>What is Staff Augmentation?</h3>
                                <p >
                                    Staff augmentation is ultimately about strategic flexibility. It’s the power to access top-tier, specialized tech talent on demand, allowing you to overcome hiring challenges, mitigate risk, and keep your projects moving forward at the pace the market demands.
                                </p>
                                <p>You have a vision. We have the missing piece to your team</p>
                                <p className='text-dark'>Let&apos;s have a conversation about your project&apos;s specific needs and how the right talent can help you accelerate your time-to-market.</p>

                                {/* Call to Action */}
                                {/* <div className=" mb-5">
                        <h3 className="fw-bold mb-3 " style={{ color: '#020842' }}>Ready to Scale Your Team?</h3>
                        <p className="lead mb-4" style={{ maxWidth: '700px' }}>
                            Accelerate your projects with our staff augmentation services and gain instant access to a pool of pre-vetted professionals who integrate seamlessly into your workflows.
                        </p>
                    </div> */}
                                <a href="/contact" className="btn btn-primary btn-lg shadow mb-3 ">Get a Free Consultation</a>

                                <h3 className="h4 mb-3 " style={{ color: '#020842' }}>We provide a partner who is ready to contribute from day one.</h3>
                                <li className="list-group-item"><FaCheckCircle className=" me-2" style={{ color: '#0044EB' }} />Create a Clear 30-60-90 Day Plan</li>
                                <li className="list-group-item"><FaCheckCircle className=" me-2" style={{ color: '#0044EB' }} />Onboarding for Day-One Productivity</li>
                                <li className="list-group-item"><FaCheckCircle className=" me-2" style={{ color: '#0044EB' }} />Ongoing Partnership & Support</li>
                                <li className="list-group-item"><FaCheckCircle className=" me-2" style={{ color: '#0044EB' }} />Cost-effective scaling solution</li>
                            </div>



                        </div>
                    </div>




                    {/* Talent Pool Section */}
                    <div className="mb-5">
                        <h3 className="text-center mb-4 fw-bold " style={{ color: '#020842' }}>Our Expert Talent Pool</h3>
                        <div className="row g-4">
                            {[
                                { icon: <FaCode />, title: 'Full-Stack Developers', desc: 'Expert developers proficient in React, Node.js, Python, and cloud platforms.' },
                                { icon: <FaLaptopCode />, title: 'Frontend Specialists', desc: 'UI/UX focused developers skilled in React, Angular, and modern frontend frameworks.' },
                                { icon: <FaServer />, title: 'Backend Engineers', desc: 'Server-side experts in Node.js, Python, Java, .NET, and databases.' },
                                { icon: <FaCloud />, title: 'DevOps Engineers', desc: 'Infrastructure specialists for CI/CD, cloud deployment, and system optimization.' },
                                { icon: <FaPaintBrush />, title: 'UI/UX Designers', desc: 'Creative professionals focused on user experience and interface design.' },
                                { icon: <FaBug />, title: 'QA Engineers', desc: 'Experts for manual and automated testing across platforms.' }
                            ].map((item, i) => (
                                <div className="col-md-4" key={i}>
                                    <div className="card border-0 shadow h-100 text-center">
                                        <div className="card-body">
                                            <div className="mb-3 text-primary fs-1">{item.icon}</div>
                                            <h5 className="card-title fw-bold">{item.title}</h5>
                                            <p className="text-muted mb-0">{item.desc}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Process Section */}
                    <div className="mb-5">
                        <h3 className="text-center mb-4 fw-bold " style={{ color: '#020842' }}>Our Process</h3>
                        <div className="row g-4">
                            {[
                                { num: '01', icon: <FaUsers />, title: 'Requirement Analysis', desc: 'We analyze your project needs and find the perfect match.' },
                                { num: '02', icon: <HiOutlineShieldCheck />, title: 'Talent Selection', desc: 'We present pre-vetted candidates matching your requirements.' },
                                { num: '03', icon: <FaClock />, title: 'Quick Integration', desc: 'Seamless onboarding with your existing team and workflows.' },
                                { num: '04', icon: <HiOutlineTrendingUp />, title: 'Ongoing Support', desc: 'Continuous support and performance monitoring.' }
                            ].map((step, i) => (
                                <div className="col-md-3" key={i}>
                                    <div className="card border-0 shadow h-100 text-center">
                                        <div className="card-body">
                                            <div className="display-6 fw-bold  mb-2" style={{ color: '#020842' }}>{step.num}</div>
                                            <div className="fs-1 text-primary mb-3">{step.icon}</div>
                                            <h6 className="fw-bold mb-2">{step.title}</h6>
                                            <p className="text-muted mb-0">{step.desc}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>


                </div>
            </section>
        </>
    )
}
