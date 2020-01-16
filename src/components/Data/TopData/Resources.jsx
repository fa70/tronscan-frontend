import React, { Fragment } from "react";
import { tu, t } from "../../../utils/i18n";
import { Table } from "antd";
import {
  FormattedNumber,
  injectIntl,
  FormattedDate,
  FormattedTime
} from "react-intl";
import { upperFirst } from "lodash";
import { AddressLink } from "../../common/Links";
import SmartTable from "../../common/SmartTable";

class DataResources extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
      loading: false,
      resourcesList: [{ id: 1 }],
      titleStyle: {
        fontFamily: "PingFangSC-Medium",
        fontSize: "16px",
        color: "#3C3C3C"
      }
    };
  }
  componentDidMount() {}
  customizedEnergyColumn = () => {
    let { intl } = this.props;
    let column = [
      {
        title: upperFirst(
          intl.formatMessage({
            id: "data_resource_table_rank"
          })
        ),
        dataIndex: "rank",
        key: "rank",
        align: "center",
        render: (text, record, index) => {
          return (
            <span className="rankWidth">
               {index < 3 ? (
                <span className={`rank-${index} rank`}></span>
              ) : (
                index + 1
              )}
            </span>
          );
        }
      },
      {
        title: upperFirst(
          intl.formatMessage({
            id: "data_resource_table_account"
          })
        ),
        dataIndex: "address",
        key: "address",
        align: "center",
        width: "12%",
        render: (text, record, index) => {
          return text ? (
            <span className="addressWidth">
              <span className="">
                <AddressLink address={text}>{text}</AddressLink>
              </span>
            </span>
          ) : (
            "--"
          );
        }
      },
      {
        title: upperFirst(
          intl.formatMessage({
            id: "data_resource_table_freezingTRX_energy"
          })
        ),
        dataIndex: "energy_use",
        key: "energy_use",
        align: "center",
        render: (text, record, index) => {
          return (
            <span className="">
              <FormattedNumber value={parseInt(text || 0)}></FormattedNumber>
            </span>
          );
        }
      },
      {
        title: upperFirst(
          intl.formatMessage({
            id: "data_resource_table_burningTRX_energy"
          })
        ),
        dataIndex: "energy_burn",
        key: "energy_burn",
        align: "center",
        render: (text, record, index) => {
          return (
            <span className="">
              <FormattedNumber value={parseInt(text || 0)}></FormattedNumber>
            </span>
          );
        }
      },
      {
        title: upperFirst(
          intl.formatMessage({
            id: "data_resource_table_energy_consumed"
          })
        ),
        dataIndex: "whole_energy_use",
        key: "whole_energy_use",
        align: "center",
        render: (text, record, index) => {
          return (
            <span className="">
              <FormattedNumber value={parseInt(text || 0)}></FormattedNumber>
            </span>
          );
        }
      },
      {
        title: upperFirst(
          intl.formatMessage({
            id: "data_resource_table_percentage"
          })
        ),
        dataIndex: "percentage",
        key: "percentage",
        align: "center",
        render: (text, record, index) => {
          return (
            <span className="percentageWidth">{(text * 100).toFixed(2)}%</span>
          );
        }
      }
    ];
    return column;
  };

  customizedBandWidthColumn = () => {
    let { intl } = this.props;
    let column = [
      {
        title: upperFirst(
          intl.formatMessage({
            id: "data_resource_table_rank"
          })
        ),
        dataIndex: "rank",
        key: "rank",
        render: (text, record, index) => {
          console.log(index, "index");
          return (
            <span className="rankWidth">
              {index < 3 ? (
                <span className={`rank-${index} rank`}></span>
              ) : (
                index + 1
              )}
            </span>
          );
        },
        align: "center"
      },
      {
        title: upperFirst(
          intl.formatMessage({
            id: "data_resource_table_account"
          })
        ),
        dataIndex: "address",
        key: "address",
        width: "12%",
        align: "center",
        render: (text, record, index) => {
          return text ? (
            <span className="addressWidth">
              <span>
                <AddressLink address={text}>{text}</AddressLink>
              </span>
            </span>
          ) : (
            "--"
          );
        }
      },
      {
        title: upperFirst(
          intl.formatMessage({
            id: "data_resource_table_freezingTRX_energy"
          })
        ),
        dataIndex: "net_use",
        key: "net_use",
        align: "center",
        render: (text, record, index) => {
          return (
            <span>
              <FormattedNumber value={parseInt(text || 0)}></FormattedNumber>
            </span>
          );
        }
      },
      {
        title: upperFirst(
          intl.formatMessage({
            id: "data_resource_table_burningTRX_energy"
          })
        ),
        dataIndex: "net_burn",
        key: "net_burn",
        align: "center",
        render: (text, record, index) => {
          return (
            <span>
              <FormattedNumber value={parseInt(text || 0)}></FormattedNumber>
            </span>
          );
        }
      },
      {
        title: upperFirst(
          intl.formatMessage({
            id: "data_resource_table_energy_consumed"
          })
        ),
        dataIndex: "whole_net_use",
        key: "whole_net_use",
        align: "center",
        render: (text, record, index) => {
          return (
            <span>
              <FormattedNumber value={parseInt(text || 0)}></FormattedNumber>
            </span>
          );
        }
      },
      {
        title: upperFirst(
          intl.formatMessage({
            id: "data_resource_table_percentage"
          })
        ),
        dataIndex: "percentage",
        key: "percentage",
        align: "center",
        render: (text, record, index) => {
          return (
            <span className="percentageWidth">{(text * 100).toFixed(2)} %</span>
          );
        }
      }
    ];
    return column;
  };

  render() {
    let energyColumns = this.customizedEnergyColumn();
    let bandWidthColumns = this.customizedBandWidthColumn();
    const { data, resourcesList, loading, titleStyle } = this.state;
    const { topData } = this.props;
    console.log(topData);
    let energyData = topData[0].data || [];
    let bandWidthData = topData[1].data || [];

    return (
      <div className="resourceWrapper">
        <h4 style={titleStyle} className="mt-4 mb-2">
          {tu("data_resource_table_title")}
        </h4>
        <div className="resourceTable top-data">
          {resourcesList.length === 0 ? (
            <div className="pt-5 pb-5 text-center no-data transfers-bg-white">
              {tu("no_transfers")}
            </div>
          ) : (
            <SmartTable
              bordered={false}
              loading={loading}
              column={energyColumns}
              data={energyData}
              position="bottom"
              isPaddingTop={false}
            />
          )}
        </div>
        <h4 style={titleStyle} className="mt-4 mb-2">
          最高带宽消耗
        </h4>
        <div className="resourceTable top-data">
          {resourcesList.length === 0 ? (
            <div className="pt-5 pb-5 text-center no-data transfers-bg-white">
              {tu("no_transfers")}
            </div>
          ) : (
            <SmartTable
              bordered={false}
              loading={loading}
              column={bandWidthColumns}
              data={bandWidthData}
              position="bottom"
              isPaddingTop={false}
            />
          )}
        </div>
      </div>
    );
  }
}

export default injectIntl(DataResources);
