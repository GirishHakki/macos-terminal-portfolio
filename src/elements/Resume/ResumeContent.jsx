import React from "react";
import styled from "styled-components";
import BodyContent from "@elements/Window/BodyContent";

const Iframe = styled.iframe`
	width: 100%;
	border: none;
`;

const ResumeContent = () => {
	return (
		<BodyContent>
			<Iframe
				src="https://drive.google.com/file/d/1IpO0zCd9TVXedW6v84DgSpX6fEel2DjQ/preview"
				frameBorder="0"
				title="Girish's Resume"
			></Iframe>
		</BodyContent>
	);
};

export default ResumeContent;
