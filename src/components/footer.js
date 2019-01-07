import React from 'react';
import pathHelpers from './path_helper';

const Footer = () => (
    <footer className="footer">
        <div className="container text-right">
            <a href={pathHelpers.BASE_DOJLIDO_PORTFOLIO_URL} className="dojlidoPortfolioHref" rel="noopener noreferrer" target="_blank">
                <span className="signature-footer-ninja">Created By Dojldio</span>
                <img
                    className="ninja-brand"
                    src={`${pathHelpers.BASE_IMAGE_PATH}ninja.png`}
                    alt="Ninja signature" />
            </a>
        </div>
    </footer>
    );

export default Footer;

