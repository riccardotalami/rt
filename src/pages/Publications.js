import React from 'react'
import NavBar from '../components/NavBar'
import './Publications.css'

function Publications() {
    return (
        <div className='Publications'>
            <NavBar />
            <div className='Publications_Title'>
                <h1>Publications</h1>
            </div>
            <div className="Publications_Sections">
                <div className="individual_publication_section">
                    <h3>Journals</h3>
                    <ul>
                        <li><b>Talami, R.</b>, Hu, X., Dawoodjee, I. and Ghahramani, A. 2024. Examining Different Placement Strategies for Indoor Environmental Quality Sensors in Office Environments</a>. <i>Science and Technology for the Built Environment, Under Review</i></li>
                        <li>Shah, I., Su, X.,<b> Talami, R.</b> and Ghahramani, A. 2024. <a href="https://doi.org/10.1016/j.enbenv.2024.04.001" target="_blank">Enhancing Building Envelopes: Parametric Analysis of Shading Systems for Opaque Facades and Their Comparison with Cool Paints</a>. <i>Energy and Built Environment</i></li>
                        <li><b>Talami, R.</b>, Dawoodjee, I. and Ghahramani, A., 2024. <a href="https://doi.org/10.1016/j.enbenv.2023.07.001" target="_blank">Demystifying energy savings from dynamic temperature setpoints under weather and occupancy variability</a>. <i>Energy and Built Environment, 5(6)</i>, 878-888</li>
                        <li><b>Talami, R.</b>, Dawoodjee, I. and Ghahramani, A., 2023. <a href="https://doi.org/10.3390/buildings13122998" target="_blank">Quantifying Energy Savings from Optimal Selection of HVAC Temperature Setpoints and Setbacks across Diverse Occupancy Rates and Patterns</a>. <i>Buildings, 13(12)</i>, 2998</li>
                        <li><b>Talami, R.</b> and Jakubiec, J.A., 2020. <a href="https://doi.org/10.1016/j.enbuild.2020.110177" target="_blank">Early-design sensitivity of radiant cooled office buildings in the tropics for building performance</a>. <i>Energy and Buildings, 223</i>, 110177</li>
                    </ul>
                </div>
                <div className="individual_publication_section">
                    <h3>Conferences</h3>
                    <ul>
                        <li><b>Talami, R.</b>, Wright, J. and Howard, B., 2021. <a href="https://www.researchgate.net/profile/Riccardo-Talami/publication/354447707_Multi-criteria_robustness_assessment_of_a_sequential_whole-building_design_optimization/links/6138de5ea3a397270a8f087c/Multi-criteria-robustness-assessment-of-a-sequential-whole-building-design-optimization.pdf" target="_blank">Multi-criteria robustness assessment of a sequential wholebuilding design optimization</a>. In <i>Proceedings of the 17th IBPSA International conference</i>.</li>
                        <li><b>Talami, R.</b>, Wright, J. and Howard, B., 2020. <a href="https://repository.lboro.ac.uk/articles/conference_contribution/A_comparison_between_sequential_and_simultaneous_whole-building_design_optimization_for_building_performance/12719768/1/files/24077909.pdf" target='_blank'>A comparison between sequential and simultaneous whole-building design optimization for building performance</a>. In <i>Proceedings from Building Simulation Optimization, Loughborough, UK, September 21-22</i>.</li>
                        <li><b>Talami, R.</b> and Alstan Jakubiec, J., 2019, September. <a href="https://publications.ibpsa.org/proceedings/bs/2019/papers/BS2019_210315.pdf" target='_blank'>Sensitivity of design parameters on energy, system and comfort performances for radiant cooled office buildings in the tropics</a>. In <i>Building Simulation 2019 (Vol. 16, pp. 1786-1793). IBPSA</i>.</li>
                        <li>Jakubiec, J.A., Srisamranrungruang, T., Kong, Z., Quek, G. and <b>Talami, R.</b>, 2019. <a href="http://www.ibpsa.org/proceedings/BS2019/BS2019_210898.pdf" target='_blank'>Subjective and measured evidence for residential lighting metrics in the tropics</a>. In <i>Building Simulation, Rome, Italy</i>.</li>
                    </ul>
                </div>
                <div className="individual_publication_section">
                    <h3>Thesis</h3>
                    <ul>
                        <li><b>Talami, R.</b>, 2022. <a href="https://doi.org/10.26174/thesis.lboro.21547701.v1" target="_blank">The sequential design optimization of building performance.</a> (Doctoral dissertation, Loughborough University).</li>
                    </ul>
                </div>
                <div className="individual_publication_section">
                    <h3>Report</h3>
                    <ul>
                        <li><b>Talami, R.</b>, Karmann, C., Bauman, F., Schiavon, S. and Raftery, P., 2017. <a href="https://escholarship.org/content/qt7pz8p9r6/qt7pz8p9r6.pdf" target='_blank'>Recent trends in radiant system technology in North America</a>.</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Publications
