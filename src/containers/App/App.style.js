import styled from 'styled-components';
import { Grid } from 'react-bootstrap';
import { media } from '../../theme/media';

export const StyledGrid = styled(Grid)`
	padding: 0;
	margin-top: 96px;

	${media.phone`
		margin-top: 0;
	`}
`;