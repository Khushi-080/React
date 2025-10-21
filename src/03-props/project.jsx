import React from 'react'
import './Project.css';
import {Bookmark,AtSign} from 'lucide-react';

function Project() {
    return (
        <div className='parent'>

            <div className='card'>
                <div className="top">
                    <button><AtSign /></button>
                    <button>Save <Bookmark size={12} /> </button>

                </div>
                <div className="center">
                    <h3>Amazon<span>5 days ago</span></h3>
                    <h2>Senior UI/UX Designer</h2>
                    <div>
                        <h4>Part time</h4>
                        <h4>Senior Level</h4>
                    </div>
                </div>
                <div className="bottom">
                    <div>
                        <div>
                            <h3>$120/hr</h3>
                            <p>Mumbai,India</p>
                        </div>
                        <button>Apply Now</button>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Project;