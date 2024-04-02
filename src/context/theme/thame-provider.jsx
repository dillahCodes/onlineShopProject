import { HappyProvider } from "@ant-design/happy-work-theme";
import { ConfigProvider } from "antd";
import PropTypes from "prop-types";

const ThemeProvider = (props) => {
  const { children } = props;

  const color = {
    primary: "#0d0d0d",
  };

  const themeConfigs = {
    // algorithm: theme.darkAlgorithm,
    token: {
      colorPrimary: color.primary,
    },
    components: {
      Layout: {
        headerBg: "#f7f7f7",
      },
    },
  };

  return (
    <ConfigProvider theme={themeConfigs}>
      <HappyProvider>{children}</HappyProvider>
    </ConfigProvider>
  );
};

export default ThemeProvider;

ThemeProvider.propTypes = {
  children: PropTypes.node,
};
