// @ts-ignore
// eslint-disable-next-line import/no-unresolved
import { usePluginData } from '@docusaurus/useGlobalData';
const pluginName = 'component-docs-plugin';
function useDoc(withPath) {
    const pluginData = usePluginData(pluginName);
    return pluginData?.docs?.[withPath];
}
export default useDoc;
