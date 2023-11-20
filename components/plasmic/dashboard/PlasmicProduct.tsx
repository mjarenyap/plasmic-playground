// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: kSeKDWC6d3hkF8pA4HpmAt
// Component: fhYw-rsRabJz

import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/react-web/lib/host";
import * as plasmicAuth from "@plasmicapp/react-web/lib/auth";
import { usePlasmicDataSourceContext } from "@plasmicapp/data-sources-context";
import {
  executePlasmicDataOp,
  usePlasmicDataOp,
  usePlasmicInvalidate
} from "@plasmicapp/react-web/lib/data-sources";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import PageLayout from "../../PageLayout"; // plasmic-import: dLs_tGAJBGYA/component
import DateTimeRangePicker from "../../DateTimeRangePicker"; // plasmic-import: SpkwBTn_y8pG/component
import { AntdDatePicker } from "@plasmicpkgs/antd5/skinny/registerDatePicker";
import { datePickerHelpers as AntdDatePicker_Helpers } from "@plasmicpkgs/antd5/skinny/registerDatePicker";
import Statistic from "../../Statistic"; // plasmic-import: iGqX1x8hlVRp/component
import { RichTable } from "@plasmicpkgs/plasmic-rich-components";
import { tableHelpers as RichTable_Helpers } from "@plasmicpkgs/plasmic-rich-components";
import { Fetcher } from "@plasmicapp/react-web/lib/data-sources";

import { useScreenVariants as useScreenVariantslzF8GoYj87Lq } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: LzF8GoYJ87Lq/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic_antd_5_hostless.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic_plasmic_rich_components.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic_dashboard.module.css"; // plasmic-import: kSeKDWC6d3hkF8pA4HpmAt/projectcss
import sty from "./PlasmicProduct.module.css"; // plasmic-import: fhYw-rsRabJz/css

createPlasmicElementProxy;

export type PlasmicProduct__VariantMembers = {};
export type PlasmicProduct__VariantsArgs = {};
type VariantPropType = keyof PlasmicProduct__VariantsArgs;
export const PlasmicProduct__VariantProps = new Array<VariantPropType>();

export type PlasmicProduct__ArgsType = {};
type ArgPropType = keyof PlasmicProduct__ArgsType;
export const PlasmicProduct__ArgProps = new Array<ArgPropType>();

export type PlasmicProduct__OverridesType = {
  root?: p.Flex<"div">;
  pageLayout?: p.Flex<typeof PageLayout>;
  h1?: p.Flex<"h1">;
  dateTimeRangePicker?: p.Flex<typeof DateTimeRangePicker>;
  table?: p.Flex<typeof RichTable>;
};

export interface DefaultProductProps {}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicProduct__RenderFunc(props: {
  variants: PlasmicProduct__VariantsArgs;
  args: PlasmicProduct__ArgsType;
  overrides: PlasmicProduct__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);

  const $props = {
    ...args,
    ...variants
  };

  const __nextRouter = useNextRouter();
  const $ctx = ph.useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const currentUser = p.useCurrentUser?.() || {};

  let [$queries, setDollarQueries] = React.useState<
    Record<string, ReturnType<typeof usePlasmicDataOp>>
  >({});
  const stateSpecs: Parameters<typeof p.useDollarState>[0] = React.useMemo(
    () => [
      {
        path: "table.selectedRowKey",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined,

        onMutate: p.generateOnMutateForSpec("selectedRowKey", RichTable_Helpers)
      },
      {
        path: "table.selectedRow",
        type: "private",
        variableType: "object",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined,

        onMutate: p.generateOnMutateForSpec("selectedRow", RichTable_Helpers)
      },
      {
        path: "table.selectedRows",
        type: "private",
        variableType: "array",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined,

        onMutate: p.generateOnMutateForSpec("selectedRows", RichTable_Helpers)
      },
      {
        path: "table.selectedRowKeys",
        type: "private",
        variableType: "array",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined,

        onMutate: p.generateOnMutateForSpec(
          "selectedRowKeys",
          RichTable_Helpers
        )
      },
      {
        path: "start.value",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined,

        onMutate: p.generateOnMutateForSpec("value", AntdDatePicker_Helpers)
      },
      {
        path: "end.value",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined,

        onMutate: p.generateOnMutateForSpec("value", AntdDatePicker_Helpers)
      }
    ],
    [$props, $ctx, $refs]
  );
  const $state = p.useDollarState(stateSpecs, {
    $props,
    $ctx,
    $queries: $queries,
    $refs
  });

  const new$Queries: Record<string, ReturnType<typeof usePlasmicDataOp>> = {
    revenueByDateRange: usePlasmicDataOp(() => {
      return {
        sourceId: "xsrPaE5HRW6a5di6HdAkNS",
        opId: "203588c3-63ee-439d-b7ad-58d1d17d6c52",
        userArgs: {
          query: [$state.start.value, $state.end.value]
        },
        cacheKey: `plasmic.$.203588c3-63ee-439d-b7ad-58d1d17d6c52.$.`,
        invalidatedKeys: null,
        roleId: null
      };
    }),
    topProductsByQuantityLastYear: usePlasmicDataOp(() => {
      return {
        sourceId: "xsrPaE5HRW6a5di6HdAkNS",
        opId: "709edbff-823b-4f11-b7f3-78e35aabae10",
        userArgs: {
          query: [$state.start.value, $state.end.value]
        },
        cacheKey: `plasmic.$.709edbff-823b-4f11-b7f3-78e35aabae10.$.`,
        invalidatedKeys: null,
        roleId: null
      };
    }),
    totalProductCountByDateRange: usePlasmicDataOp(() => {
      return {
        sourceId: "xsrPaE5HRW6a5di6HdAkNS",
        opId: "a3b118dc-8d40-4bc3-87fa-abb36544c699",
        userArgs: {
          query: [$state.start.value, $state.end.value]
        },
        cacheKey: `plasmic.$.a3b118dc-8d40-4bc3-87fa-abb36544c699.$.`,
        invalidatedKeys: null,
        roleId: null
      };
    }),
    unitsSoldByDateRange: usePlasmicDataOp(() => {
      return {
        sourceId: "xsrPaE5HRW6a5di6HdAkNS",
        opId: "83428640-06fe-497e-bdd7-dbb7a89ee364",
        userArgs: {
          query: [$state.start.value, $state.end.value]
        },
        cacheKey: `plasmic.$.83428640-06fe-497e-bdd7-dbb7a89ee364.$.`,
        invalidatedKeys: null,
        roleId: null
      };
    }),
    listAllProductNames: usePlasmicDataOp(() => {
      return {
        sourceId: "xsrPaE5HRW6a5di6HdAkNS",
        opId: "26a72003-4f65-499f-a090-279c02062850",
        userArgs: {},
        cacheKey: `plasmic.$.26a72003-4f65-499f-a090-279c02062850.$.`,
        invalidatedKeys: null,
        roleId: null
      };
    })
  };
  if (Object.keys(new$Queries).some(k => new$Queries[k] !== $queries[k])) {
    setDollarQueries(new$Queries);

    $queries = new$Queries;
  }

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantslzF8GoYj87Lq()
  });

  return (
    <React.Fragment>
      <Head>
        <meta name="twitter:card" content="summary" />
        <title key="title">{PlasmicProduct.pageMetadata.title}</title>
        <meta
          key="og:title"
          property="og:title"
          content={PlasmicProduct.pageMetadata.title}
        />
        <meta
          key="twitter:title"
          name="twitter:title"
          content={PlasmicProduct.pageMetadata.title}
        />
      </Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
        <div
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          className={classNames(
            projectcss.all,
            projectcss.root_reset,
            projectcss.plasmic_default_styles,
            projectcss.plasmic_mixins,
            projectcss.plasmic_tokens,
            plasmic_antd_5_hostless_css.plasmic_tokens,
            plasmic_plasmic_rich_components_css.plasmic_tokens,
            sty.root
          )}
        >
          <PageLayout
            data-plasmic-name={"pageLayout"}
            data-plasmic-override={overrides.pageLayout}
            className={classNames("__wab_instance", sty.pageLayout)}
          >
            <ph.DataCtxReader>
              {$ctx => (
                <React.Fragment>
                  <h1
                    data-plasmic-name={"h1"}
                    data-plasmic-override={overrides.h1}
                    className={classNames(
                      projectcss.all,
                      projectcss.h1,
                      projectcss.__wab_text,
                      sty.h1
                    )}
                  >
                    {"Product Metrics"}
                  </h1>
                  <section
                    className={classNames(projectcss.all, sty.section__x38EG)}
                  >
                    <DateTimeRangePicker
                      data-plasmic-name={"dateTimeRangePicker"}
                      data-plasmic-override={overrides.dateTimeRangePicker}
                      className={classNames(
                        "__wab_instance",
                        sty.dateTimeRangePicker
                      )}
                    />

                    <p.Stack
                      as={"div"}
                      hasGap={true}
                      className={classNames(projectcss.all, sty.freeBox__fv2Jv)}
                    >
                      <Statistic
                        className={classNames(
                          "__wab_instance",
                          sty.statistic__wSj2F
                        )}
                        hideTrendTracker={true}
                        number={
                          <div
                            className={classNames(
                              projectcss.all,
                              projectcss.__wab_text,
                              sty.text__svsBc
                            )}
                          >
                            <React.Fragment>
                              <React.Fragment>{""}</React.Fragment>
                              {
                                <h2
                                  className={classNames(
                                    projectcss.all,
                                    projectcss.h2,
                                    projectcss.__wab_text,
                                    sty.h2__cpUxV
                                  )}
                                >
                                  <React.Fragment>
                                    {(() => {
                                      try {
                                        return $queries
                                          .totalProductCountByDateRange.data[0]
                                          .product_count;
                                      } catch (e) {
                                        if (
                                          e instanceof TypeError ||
                                          e?.plasmicType ===
                                            "PlasmicUndefinedDataError"
                                        ) {
                                          return "NULL";
                                        }
                                        throw e;
                                      }
                                    })()}
                                  </React.Fragment>
                                </h2>
                              }
                              <React.Fragment>{""}</React.Fragment>
                            </React.Fragment>
                          </div>
                        }
                        unit={
                          <div
                            className={classNames(
                              projectcss.all,
                              sty.freeBox__mCxmS
                            )}
                          >
                            <p
                              className={classNames(
                                projectcss.all,
                                projectcss.p,
                                projectcss.__wab_text,
                                sty.p__jY03
                              )}
                            >
                              {"Product inventory"}
                            </p>
                            <p.PlasmicImg
                              alt={""}
                              className={classNames(sty.img__e1K36)}
                              displayHeight={"auto"}
                              displayMaxHeight={"28px"}
                              displayMaxWidth={"28px"}
                              displayMinHeight={"0"}
                              displayMinWidth={"0"}
                              displayWidth={"auto"}
                              loading={"lazy"}
                              src={{
                                src: "/plasmic/dashboard/images/orderIcon.svg",
                                fullWidth: 150,
                                fullHeight: 150,
                                aspectRatio: 1
                              }}
                            />
                          </div>
                        }
                      />

                      <Statistic
                        className={classNames(
                          "__wab_instance",
                          sty.statistic__ttuDy
                        )}
                        hideTrendTracker={true}
                        number={
                          <div
                            className={classNames(
                              projectcss.all,
                              projectcss.__wab_text,
                              sty.text__vIlOv
                            )}
                          >
                            <React.Fragment>
                              <React.Fragment>{""}</React.Fragment>
                              {
                                <h2
                                  className={classNames(
                                    projectcss.all,
                                    projectcss.h2,
                                    projectcss.__wab_text,
                                    sty.h2__oIyar
                                  )}
                                >
                                  <React.Fragment>
                                    {(() => {
                                      try {
                                        return Intl.NumberFormat("en").format(
                                          $queries.unitsSoldByDateRange.data[0]
                                            .products_sold
                                        );
                                      } catch (e) {
                                        if (
                                          e instanceof TypeError ||
                                          e?.plasmicType ===
                                            "PlasmicUndefinedDataError"
                                        ) {
                                          return "NULL";
                                        }
                                        throw e;
                                      }
                                    })()}
                                  </React.Fragment>
                                </h2>
                              }
                              <React.Fragment>{""}</React.Fragment>
                            </React.Fragment>
                          </div>
                        }
                        unit={
                          <div
                            className={classNames(
                              projectcss.all,
                              sty.freeBox__qmj5G
                            )}
                          >
                            <p
                              className={classNames(
                                projectcss.all,
                                projectcss.p,
                                projectcss.__wab_text,
                                sty.p__hHntF
                              )}
                            >
                              {"Units sold"}
                            </p>
                            <p.PlasmicImg
                              alt={""}
                              className={classNames(sty.img__e2Jz)}
                              displayHeight={"auto"}
                              displayMaxHeight={"28px"}
                              displayMaxWidth={"28px"}
                              displayMinHeight={"0"}
                              displayMinWidth={"0"}
                              displayWidth={"auto"}
                              loading={"lazy"}
                              src={{
                                src: "/plasmic/dashboard/images/cartIcon.svg",
                                fullWidth: 150,
                                fullHeight: 150,
                                aspectRatio: 1
                              }}
                            />
                          </div>
                        }
                      />

                      <Statistic
                        className={classNames(
                          "__wab_instance",
                          sty.statistic__fOhNy
                        )}
                        hideTrendTracker={true}
                        number={
                          <div
                            className={classNames(
                              projectcss.all,
                              projectcss.__wab_text,
                              sty.text__wlvDm
                            )}
                          >
                            <React.Fragment>
                              <React.Fragment>{""}</React.Fragment>
                              {
                                <h2
                                  className={classNames(
                                    projectcss.all,
                                    projectcss.h2,
                                    projectcss.__wab_text,
                                    sty.h2__xdS7G
                                  )}
                                >
                                  <React.Fragment>
                                    {(() => {
                                      try {
                                        return (
                                          "$" +
                                          Intl.NumberFormat("en").format(
                                            $queries.revenueByDateRange.data[0]
                                              .total_revenue
                                          )
                                        );
                                      } catch (e) {
                                        if (
                                          e instanceof TypeError ||
                                          e?.plasmicType ===
                                            "PlasmicUndefinedDataError"
                                        ) {
                                          return "NULL";
                                        }
                                        throw e;
                                      }
                                    })()}
                                  </React.Fragment>
                                </h2>
                              }
                              <React.Fragment>{""}</React.Fragment>
                            </React.Fragment>
                          </div>
                        }
                        unit={
                          <div
                            className={classNames(
                              projectcss.all,
                              sty.freeBox___23VdT
                            )}
                          >
                            <p
                              className={classNames(
                                projectcss.all,
                                projectcss.p,
                                projectcss.__wab_text,
                                sty.p__uf8FO
                              )}
                            >
                              {"Total revenue"}
                            </p>
                            <p.PlasmicImg
                              alt={""}
                              className={classNames(sty.img__gx7Xu)}
                              displayHeight={"auto"}
                              displayMaxHeight={"28px"}
                              displayMaxWidth={"28px"}
                              displayMinHeight={"0"}
                              displayMinWidth={"0"}
                              displayWidth={"auto"}
                              loading={"lazy"}
                              src={{
                                src: "/plasmic/dashboard/images/dollarIcon.svg",
                                fullWidth: 150,
                                fullHeight: 150,
                                aspectRatio: 1
                              }}
                            />
                          </div>
                        }
                      />
                    </p.Stack>
                  </section>
                  <section
                    className={classNames(projectcss.all, sty.section__u2Ir5)}
                  >
                    <div
                      className={classNames(projectcss.all, sty.freeBox__vnEHh)}
                    >
                      <h2
                        className={classNames(
                          projectcss.all,
                          projectcss.h2,
                          projectcss.__wab_text,
                          sty.h2__om6Ae
                        )}
                      >
                        {"Top selling products"}
                      </h2>
                      {(() => {
                        const child$Props = {
                          className: classNames("__wab_instance", sty.table),
                          data: (() => {
                            try {
                              return $queries.topProductsByQuantityLastYear;
                            } catch (e) {
                              if (
                                e instanceof TypeError ||
                                e?.plasmicType === "PlasmicUndefinedDataError"
                              ) {
                                return undefined;
                              }
                              throw e;
                            }
                          })(),
                          defaultSize: "large",
                          fields: (() => {
                            const __composite = [
                              {
                                key: "product_id",
                                fieldId: "product_id",
                                isHidden: null
                              },
                              {
                                key: "product_name",
                                fieldId: "product_name",
                                title: null
                              },
                              {
                                key: "total_quantity_sold",
                                fieldId: "total_quantity_sold",
                                title: null
                              }
                            ];
                            __composite["0"]["isHidden"] = true;
                            __composite["1"]["title"] = "Product";
                            __composite["2"]["title"] = "Quantity sold";
                            return __composite;
                          })(),
                          hideDensity: true,
                          hideExports: false,
                          hideSearch: false,
                          onRowSelectionChanged: async (...eventArgs: any) => {
                            p.generateStateOnChangePropForCodeComponents(
                              $state,
                              "selectedRowKey",
                              ["table", "selectedRowKey"],
                              RichTable_Helpers
                            ).apply(null, eventArgs);
                            p.generateStateOnChangePropForCodeComponents(
                              $state,
                              "selectedRow",
                              ["table", "selectedRow"],
                              RichTable_Helpers
                            ).apply(null, eventArgs);
                            p.generateStateOnChangePropForCodeComponents(
                              $state,
                              "selectedRows",
                              ["table", "selectedRows"],
                              RichTable_Helpers
                            ).apply(null, eventArgs);
                            p.generateStateOnChangePropForCodeComponents(
                              $state,
                              "selectedRowKeys",
                              ["table", "selectedRowKeys"],
                              RichTable_Helpers
                            ).apply(null, eventArgs);
                          },
                          scopeClassName: sty["table__instance"],
                          selectedRowKey: p.generateStateValueProp($state, [
                            "table",
                            "selectedRowKey"
                          ]),
                          selectedRowKeys: p.generateStateValueProp($state, [
                            "table",
                            "selectedRowKeys"
                          ]),
                          themeResetClassName: classNames(
                            projectcss.root_reset,
                            projectcss.root_reset_tags,
                            projectcss.plasmic_default_styles,
                            projectcss.plasmic_mixins,
                            projectcss.plasmic_tokens,
                            plasmic_antd_5_hostless_css.plasmic_tokens,
                            plasmic_plasmic_rich_components_css.plasmic_tokens
                          )
                        };
                        p.initializeCodeComponentStates(
                          $state,
                          [
                            {
                              name: "selectedRowKey",
                              plasmicStateName: "table.selectedRowKey"
                            },
                            {
                              name: "selectedRow",
                              plasmicStateName: "table.selectedRow"
                            },
                            {
                              name: "selectedRows",
                              plasmicStateName: "table.selectedRows"
                            },
                            {
                              name: "selectedRowKeys",
                              plasmicStateName: "table.selectedRowKeys"
                            }
                          ],
                          [],
                          RichTable_Helpers ?? {},
                          child$Props
                        );

                        return (
                          <RichTable
                            data-plasmic-name={"table"}
                            data-plasmic-override={overrides.table}
                            {...child$Props}
                          />
                        );
                      })()}
                    </div>
                  </section>
                </React.Fragment>
              )}
            </ph.DataCtxReader>
          </PageLayout>
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "pageLayout", "h1", "dateTimeRangePicker", "table"],
  pageLayout: ["pageLayout", "h1", "dateTimeRangePicker", "table"],
  h1: ["h1"],
  dateTimeRangePicker: ["dateTimeRangePicker"],
  table: ["table"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  pageLayout: typeof PageLayout;
  h1: "h1";
  dateTimeRangePicker: typeof DateTimeRangePicker;
  table: typeof RichTable;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicProduct__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicProduct__VariantsArgs;
    args?: PlasmicProduct__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicProduct__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicProduct__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicProduct__ArgProps,
          internalVariantPropNames: PlasmicProduct__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicProduct__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicProduct";
  } else {
    func.displayName = `PlasmicProduct.${nodeName}`;
  }
  return func;
}

function withPlasmicPageGuard<P extends object>(
  WrappedComponent: React.ComponentType<P>
) {
  const PageGuard: React.FC<P> = props => (
    <p.PlasmicPageGuard
      minRole={null}
      appId={"kSeKDWC6d3hkF8pA4HpmAt"}
      authorizeEndpoint={"https://studio.plasmic.app/authorize"}
      canTriggerLogin={true}
    >
      <WrappedComponent {...props} />
    </p.PlasmicPageGuard>
  );

  return PageGuard;
}

function withUsePlasmicAuth<P extends object>(
  WrappedComponent: React.ComponentType<P>
) {
  const WithUsePlasmicAuthComponent: React.FC<P> = props => {
    const dataSourceCtx = usePlasmicDataSourceContext() ?? {};
    const { isUserLoading, user, token } = plasmicAuth.usePlasmicAuth({
      appId: "kSeKDWC6d3hkF8pA4HpmAt"
    });

    return (
      <p.PlasmicDataSourceContextProvider
        value={{
          ...dataSourceCtx,
          isUserLoading,
          userAuthToken: token,
          user
        }}
      >
        <WrappedComponent {...props} />
      </p.PlasmicDataSourceContextProvider>
    );
  };
  return WithUsePlasmicAuthComponent;
}

export const PlasmicProduct = Object.assign(
  // Top-level PlasmicProduct renders the root element
  withUsePlasmicAuth(withPlasmicPageGuard(makeNodeComponent("root"))),
  {
    // Helper components rendering sub-elements
    pageLayout: makeNodeComponent("pageLayout"),
    h1: makeNodeComponent("h1"),
    dateTimeRangePicker: makeNodeComponent("dateTimeRangePicker"),
    table: makeNodeComponent("table"),

    // Metadata about props expected for PlasmicProduct
    internalVariantProps: PlasmicProduct__VariantProps,
    internalArgProps: PlasmicProduct__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "Product",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicProduct;
/* prettier-ignore-end */
