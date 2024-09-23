import Badge from '@/components/Badge'
import PageBanner from '@/components/PageBanner'

interface TeamDetailsPageProps {
  params: {
    slug: string;
  }
}

export default function TeamDetailsPage({ params }: TeamDetailsPageProps) {
  return (
    <>
      <PageBanner title={`Team Details ${params.slug}`}>
        Details 😍
        <Badge>Team</Badge>
      </PageBanner>

      <section className="team_details_section section_space bg-light">
        <div className="container">
          <div className="team_member_details_card">
            <div className="team_member_image">
              <img src="assets/images/team/team_member_image_3.webp" alt="Team Member Image" />
            </div>
            <div className="team_member_content">
              <h2 className="team_member_name">August Everest</h2>
              <ul className="icon_list unordered_list_block">
                <li>
                  <span className="icon_list_text">
                    <strong>Responsibility:</strong>
                    systems engineer
                  </span>
                </li>
                <li>
                  <span className="icon_list_text">
                    <strong>Experience:</strong>
                    18 Years
                  </span>
                </li>
                <li>
                  <span className="icon_list_text">
                    <strong>Email:</strong>
                    August@example.com
                  </span>
                </li>
                <li>
                  <span className="icon_list_text">
                    <strong>Phone:</strong>
                    +91590 0574 258
                  </span>
                </li>
              </ul>
              <div className="social_wrapper">
                <h3 className="social_title">Social Media</h3>
                <ul className="social_icons_block unordered_list">
                  <li>
                    <a href="#!">
                      <img src="assets/images/icons/icon_facebook.svg" alt="Icon Facebook" />
                    </a>
                  </li>
                  <li>
                    <a href="#!">
                      <img src="assets/images/icons/icon_twitter_x.svg" alt="Icon Twitter X" />
                    </a>
                  </li>
                  <li>
                    <a href="#!">
                      <img src="assets/images/icons/icon_linkedin.svg" alt="Icon Linkedin" />
                    </a>
                  </li>
                  <li>
                    <a href="#!">
                      <img src="assets/images/icons/icon_instagram.svg" alt="Icon Instagram" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <h3 className="details_item_info_title">Professional Skills</h3>
          <p>
            Since joining Techco in 1993, Matilda has been instrumental in transforming the company from a collection of tech-savvy individuals collaborating with startups to a world-renowned leader in Digital Systems Engineering Services, catering to the innovation needs of Fortune 500 enterprises. During Matilda&apos;s tenure as President and CEO, Techco has witnessed remarkable expansion in both its scale and revenue streams. This growth has been achieved hand-in-hand with the cultivation of a vibrant company culture that champions employee engagement and fosters a spirit of innovation at every level.
          </p>

          <div className="row mb-5">
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="funfact_block text-center">
                <div className="counter_value">
                  <span className="odometer" data-count="98">0</span>
                  <span>%</span>
                </div>
                <h3 className="funfact_title mb-0">Product Development</h3>
                <div className="bottom_line bg-primary"></div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="funfact_block text-center">
                <div className="counter_value">
                  <span className="odometer" data-count="88">0</span>
                  <span>%</span>
                </div>
                <h3 className="funfact_title mb-0">Problem-Solving</h3>
                <div className="bottom_line bg-danger"></div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="funfact_block text-center">
                <div className="counter_value">
                  <span className="odometer" data-count="99">0</span>
                  <span>%</span>
                </div>
                <h3 className="funfact_title mb-0">Communication Skills</h3>
                <div className="bottom_line bg-secondary"></div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="funfact_block text-center">
                <div className="counter_value">
                  <span className="odometer" data-count="77">0</span>
                  <span>%</span>
                </div>
                <h3 className="funfact_title mb-0">Passion for Helping</h3>
                <div className="bottom_line bg-warning"></div>
              </div>
            </div>
          </div>

          <h3 className="details_item_info_title">Educational Experience</h3>
          <p>
            Armed with a Bachelor&apos;s degree in Computer Science from the University of XYZ, I specialized in data structures, algorithms, and networks. Expanding my knowledge, I pursued a Master&apos;s in Information Technology Management at ABC University.
          </p>

          <p className="mb-2">Qualifications:</p>
          <ul className="icon_list unordered_list_block">
            <li>
              <span className="icon_list_icon">
                <i className="fa-solid fa-circle fa-fw"></i>
              </span>
              <span className="icon_list_text">
                Proficiency in systems analysis, design, implementation, and maintenance.
              </span>
            </li>
            <li>
              <span className="icon_list_icon">
                <i className="fa-solid fa-circle fa-fw"></i>
              </span>
              <span className="icon_list_text">
                Strong knowledge of network protocols, hardware, and software components.
              </span>
            </li>
            <li>
              <span className="icon_list_icon">
                <i className="fa-solid fa-circle fa-fw"></i>
              </span>
              <span className="icon_list_text">
                Experience with virtualization technologies (VMware, Hyper-V).
              </span>
            </li>
            <li>
              <span className="icon_list_icon">
                <i className="fa-solid fa-circle fa-fw"></i>
              </span>
              <span className="icon_list_text">
                Skilled in cloud computing platforms (AWS, Azure, Google Cloud).
              </span>
            </li>
            <li>
              <span className="icon_list_icon">
                <i className="fa-solid fa-circle fa-fw"></i>
              </span>
              <span className="icon_list_text">
                Proficient in scripting languages (Python, PowerShell).
              </span>
            </li>
            <li>
              <span className="icon_list_icon">
                <i className="fa-solid fa-circle fa-fw"></i>
              </span>
              <span className="icon_list_text">
                Experience in system security and disaster recovery planning.
              </span>
            </li>
            <li>
              <span className="icon_list_icon">
                <i className="fa-solid fa-circle fa-fw"></i>
              </span>
              <span className="icon_list_text">
                Excellent problem-solving and analytical skills.
              </span>
            </li>
          </ul>
        </div>
      </section>
    </>
  )
}