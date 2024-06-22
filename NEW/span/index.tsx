import ComponentMounter from '@ds/core/utils/component-mounter';
import { DsSpanType } from './types';

const DsSpan: React.FC<DsSpanType> = ({ children, ...attr }) => {
    return (
        <ComponentMounter as={attr.as || 'span'} {...attr}>
            {children}
        </ComponentMounter>
    );
};

export default DsSpan;
