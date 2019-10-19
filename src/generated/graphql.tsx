import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
  uuid: string,
};

/** expression to compare columns of type Boolean. All fields are combined with logical 'AND'. */
export type BooleanComparisonExp = {
  _eq?: Maybe<Scalars['Boolean']>,
  _gt?: Maybe<Scalars['Boolean']>,
  _gte?: Maybe<Scalars['Boolean']>,
  _in?: Maybe<Array<Scalars['Boolean']>>,
  _is_null?: Maybe<Scalars['Boolean']>,
  _lt?: Maybe<Scalars['Boolean']>,
  _lte?: Maybe<Scalars['Boolean']>,
  _neq?: Maybe<Scalars['Boolean']>,
  _nin?: Maybe<Array<Scalars['Boolean']>>,
};

/** columns and relationships of "children" */
export type Children = {
   __typename?: 'children',
  age: Scalars['Int'],
  /** An array relationship */
  gifts: Array<Gifts>,
  /** An aggregated array relationship */
  gifts_aggregate: GiftsAggregate,
  id: Scalars['uuid'],
  isNice: Scalars['Boolean'],
  name: Scalars['String'],
};


/** columns and relationships of "children" */
export type ChildrenGiftsArgs = {
  distinct_on?: Maybe<Array<GiftsSelectColumn>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<GiftsOrderBy>>,
  where?: Maybe<GiftsBoolExp>
};


/** columns and relationships of "children" */
export type ChildrenGiftsAggregateArgs = {
  distinct_on?: Maybe<Array<GiftsSelectColumn>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<GiftsOrderBy>>,
  where?: Maybe<GiftsBoolExp>
};

/** aggregated selection of "children" */
export type ChildrenAggregate = {
   __typename?: 'children_aggregate',
  aggregate?: Maybe<ChildrenAggregateFields>,
  nodes: Array<Children>,
};

/** aggregate fields of "children" */
export type ChildrenAggregateFields = {
   __typename?: 'children_aggregate_fields',
  avg?: Maybe<ChildrenAvgFields>,
  count?: Maybe<Scalars['Int']>,
  max?: Maybe<ChildrenMaxFields>,
  min?: Maybe<ChildrenMinFields>,
  stddev?: Maybe<ChildrenStddevFields>,
  stddev_pop?: Maybe<ChildrenStddevPopFields>,
  stddev_samp?: Maybe<ChildrenStddevSampFields>,
  sum?: Maybe<ChildrenSumFields>,
  var_pop?: Maybe<ChildrenVarPopFields>,
  var_samp?: Maybe<ChildrenVarSampFields>,
  variance?: Maybe<ChildrenVarianceFields>,
};


/** aggregate fields of "children" */
export type ChildrenAggregateFieldsCountArgs = {
  columns?: Maybe<Array<ChildrenSelectColumn>>,
  distinct?: Maybe<Scalars['Boolean']>
};

/** order by aggregate values of table "children" */
export type ChildrenAggregateOrderBy = {
  avg?: Maybe<ChildrenAvgOrderBy>,
  count?: Maybe<OrderBy>,
  max?: Maybe<ChildrenMaxOrderBy>,
  min?: Maybe<ChildrenMinOrderBy>,
  stddev?: Maybe<ChildrenStddevOrderBy>,
  stddev_pop?: Maybe<ChildrenStddevPopOrderBy>,
  stddev_samp?: Maybe<ChildrenStddevSampOrderBy>,
  sum?: Maybe<ChildrenSumOrderBy>,
  var_pop?: Maybe<ChildrenVarPopOrderBy>,
  var_samp?: Maybe<ChildrenVarSampOrderBy>,
  variance?: Maybe<ChildrenVarianceOrderBy>,
};

/** input type for inserting array relation for remote table "children" */
export type ChildrenArrRelInsertInput = {
  data: Array<ChildrenInsertInput>,
  on_conflict?: Maybe<ChildrenOnConflict>,
};

/** aggregate avg on columns */
export type ChildrenAvgFields = {
   __typename?: 'children_avg_fields',
  age?: Maybe<Scalars['Float']>,
};

/** order by avg() on columns of table "children" */
export type ChildrenAvgOrderBy = {
  age?: Maybe<OrderBy>,
};

/** Boolean expression to filter rows from the table "children". All fields are combined with a logical 'AND'. */
export type ChildrenBoolExp = {
  _and?: Maybe<Array<Maybe<ChildrenBoolExp>>>,
  _not?: Maybe<ChildrenBoolExp>,
  _or?: Maybe<Array<Maybe<ChildrenBoolExp>>>,
  age?: Maybe<IntComparisonExp>,
  gifts?: Maybe<GiftsBoolExp>,
  id?: Maybe<UuidComparisonExp>,
  isNice?: Maybe<BooleanComparisonExp>,
  name?: Maybe<StringComparisonExp>,
};

/** unique or primary key constraints on table "children" */
export enum ChildrenConstraint {
  /** unique or primary key constraint */
  ChildrenPkey = 'children_pkey'
}

/** input type for incrementing integer columne in table "children" */
export type ChildrenIncInput = {
  age?: Maybe<Scalars['Int']>,
};

/** input type for inserting data into table "children" */
export type ChildrenInsertInput = {
  age?: Maybe<Scalars['Int']>,
  gifts?: Maybe<GiftsArrRelInsertInput>,
  id?: Maybe<Scalars['uuid']>,
  isNice?: Maybe<Scalars['Boolean']>,
  name?: Maybe<Scalars['String']>,
};

/** aggregate max on columns */
export type ChildrenMaxFields = {
   __typename?: 'children_max_fields',
  age?: Maybe<Scalars['Int']>,
  name?: Maybe<Scalars['String']>,
};

/** order by max() on columns of table "children" */
export type ChildrenMaxOrderBy = {
  age?: Maybe<OrderBy>,
  name?: Maybe<OrderBy>,
};

/** aggregate min on columns */
export type ChildrenMinFields = {
   __typename?: 'children_min_fields',
  age?: Maybe<Scalars['Int']>,
  name?: Maybe<Scalars['String']>,
};

/** order by min() on columns of table "children" */
export type ChildrenMinOrderBy = {
  age?: Maybe<OrderBy>,
  name?: Maybe<OrderBy>,
};

/** response of any mutation on the table "children" */
export type ChildrenMutationResponse = {
   __typename?: 'children_mutation_response',
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'],
  /** data of the affected rows by the mutation */
  returning: Array<Children>,
};

/** input type for inserting object relation for remote table "children" */
export type ChildrenObjRelInsertInput = {
  data: ChildrenInsertInput,
  on_conflict?: Maybe<ChildrenOnConflict>,
};

/** on conflict condition type for table "children" */
export type ChildrenOnConflict = {
  constraint: ChildrenConstraint,
  update_columns: Array<ChildrenUpdateColumn>,
};

/** ordering options when selecting data from "children" */
export type ChildrenOrderBy = {
  age?: Maybe<OrderBy>,
  gifts_aggregate?: Maybe<GiftsAggregateOrderBy>,
  id?: Maybe<OrderBy>,
  isNice?: Maybe<OrderBy>,
  name?: Maybe<OrderBy>,
};

/** select columns of table "children" */
export enum ChildrenSelectColumn {
  /** column name */
  Age = 'age',
  /** column name */
  Id = 'id',
  /** column name */
  IsNice = 'isNice',
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "children" */
export type ChildrenSetInput = {
  age?: Maybe<Scalars['Int']>,
  id?: Maybe<Scalars['uuid']>,
  isNice?: Maybe<Scalars['Boolean']>,
  name?: Maybe<Scalars['String']>,
};

/** aggregate stddev on columns */
export type ChildrenStddevFields = {
   __typename?: 'children_stddev_fields',
  age?: Maybe<Scalars['Float']>,
};

/** order by stddev() on columns of table "children" */
export type ChildrenStddevOrderBy = {
  age?: Maybe<OrderBy>,
};

/** aggregate stddev_pop on columns */
export type ChildrenStddevPopFields = {
   __typename?: 'children_stddev_pop_fields',
  age?: Maybe<Scalars['Float']>,
};

/** order by stddev_pop() on columns of table "children" */
export type ChildrenStddevPopOrderBy = {
  age?: Maybe<OrderBy>,
};

/** aggregate stddev_samp on columns */
export type ChildrenStddevSampFields = {
   __typename?: 'children_stddev_samp_fields',
  age?: Maybe<Scalars['Float']>,
};

/** order by stddev_samp() on columns of table "children" */
export type ChildrenStddevSampOrderBy = {
  age?: Maybe<OrderBy>,
};

/** aggregate sum on columns */
export type ChildrenSumFields = {
   __typename?: 'children_sum_fields',
  age?: Maybe<Scalars['Int']>,
};

/** order by sum() on columns of table "children" */
export type ChildrenSumOrderBy = {
  age?: Maybe<OrderBy>,
};

/** update columns of table "children" */
export enum ChildrenUpdateColumn {
  /** column name */
  Age = 'age',
  /** column name */
  Id = 'id',
  /** column name */
  IsNice = 'isNice',
  /** column name */
  Name = 'name'
}

/** aggregate var_pop on columns */
export type ChildrenVarPopFields = {
   __typename?: 'children_var_pop_fields',
  age?: Maybe<Scalars['Float']>,
};

/** order by var_pop() on columns of table "children" */
export type ChildrenVarPopOrderBy = {
  age?: Maybe<OrderBy>,
};

/** aggregate var_samp on columns */
export type ChildrenVarSampFields = {
   __typename?: 'children_var_samp_fields',
  age?: Maybe<Scalars['Float']>,
};

/** order by var_samp() on columns of table "children" */
export type ChildrenVarSampOrderBy = {
  age?: Maybe<OrderBy>,
};

/** aggregate variance on columns */
export type ChildrenVarianceFields = {
   __typename?: 'children_variance_fields',
  age?: Maybe<Scalars['Float']>,
};

/** order by variance() on columns of table "children" */
export type ChildrenVarianceOrderBy = {
  age?: Maybe<OrderBy>,
};

/** conflict action */
export enum ConflictAction {
  /** ignore the insert on this row */
  Ignore = 'ignore',
  /** update the row with the given values */
  Update = 'update'
}

/** columns and relationships of "gifts" */
export type Gifts = {
   __typename?: 'gifts',
  childId?: Maybe<Scalars['uuid']>,
  content: Scalars['String'],
  id: Scalars['uuid'],
};

/** aggregated selection of "gifts" */
export type GiftsAggregate = {
   __typename?: 'gifts_aggregate',
  aggregate?: Maybe<GiftsAggregateFields>,
  nodes: Array<Gifts>,
};

/** aggregate fields of "gifts" */
export type GiftsAggregateFields = {
   __typename?: 'gifts_aggregate_fields',
  count?: Maybe<Scalars['Int']>,
  max?: Maybe<GiftsMaxFields>,
  min?: Maybe<GiftsMinFields>,
};


/** aggregate fields of "gifts" */
export type GiftsAggregateFieldsCountArgs = {
  columns?: Maybe<Array<GiftsSelectColumn>>,
  distinct?: Maybe<Scalars['Boolean']>
};

/** order by aggregate values of table "gifts" */
export type GiftsAggregateOrderBy = {
  count?: Maybe<OrderBy>,
  max?: Maybe<GiftsMaxOrderBy>,
  min?: Maybe<GiftsMinOrderBy>,
};

/** input type for inserting array relation for remote table "gifts" */
export type GiftsArrRelInsertInput = {
  data: Array<GiftsInsertInput>,
  on_conflict?: Maybe<GiftsOnConflict>,
};

/** Boolean expression to filter rows from the table "gifts". All fields are combined with a logical 'AND'. */
export type GiftsBoolExp = {
  _and?: Maybe<Array<Maybe<GiftsBoolExp>>>,
  _not?: Maybe<GiftsBoolExp>,
  _or?: Maybe<Array<Maybe<GiftsBoolExp>>>,
  childId?: Maybe<UuidComparisonExp>,
  content?: Maybe<StringComparisonExp>,
  id?: Maybe<UuidComparisonExp>,
};

/** unique or primary key constraints on table "gifts" */
export enum GiftsConstraint {
  /** unique or primary key constraint */
  GiftsPkey = 'gifts_pkey'
}

/** input type for inserting data into table "gifts" */
export type GiftsInsertInput = {
  childId?: Maybe<Scalars['uuid']>,
  content?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['uuid']>,
};

/** aggregate max on columns */
export type GiftsMaxFields = {
   __typename?: 'gifts_max_fields',
  content?: Maybe<Scalars['String']>,
};

/** order by max() on columns of table "gifts" */
export type GiftsMaxOrderBy = {
  content?: Maybe<OrderBy>,
};

/** aggregate min on columns */
export type GiftsMinFields = {
   __typename?: 'gifts_min_fields',
  content?: Maybe<Scalars['String']>,
};

/** order by min() on columns of table "gifts" */
export type GiftsMinOrderBy = {
  content?: Maybe<OrderBy>,
};

/** response of any mutation on the table "gifts" */
export type GiftsMutationResponse = {
   __typename?: 'gifts_mutation_response',
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'],
  /** data of the affected rows by the mutation */
  returning: Array<Gifts>,
};

/** input type for inserting object relation for remote table "gifts" */
export type GiftsObjRelInsertInput = {
  data: GiftsInsertInput,
  on_conflict?: Maybe<GiftsOnConflict>,
};

/** on conflict condition type for table "gifts" */
export type GiftsOnConflict = {
  constraint: GiftsConstraint,
  update_columns: Array<GiftsUpdateColumn>,
};

/** ordering options when selecting data from "gifts" */
export type GiftsOrderBy = {
  childId?: Maybe<OrderBy>,
  content?: Maybe<OrderBy>,
  id?: Maybe<OrderBy>,
};

/** select columns of table "gifts" */
export enum GiftsSelectColumn {
  /** column name */
  ChildId = 'childId',
  /** column name */
  Content = 'content',
  /** column name */
  Id = 'id'
}

/** input type for updating data in table "gifts" */
export type GiftsSetInput = {
  childId?: Maybe<Scalars['uuid']>,
  content?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['uuid']>,
};

/** update columns of table "gifts" */
export enum GiftsUpdateColumn {
  /** column name */
  ChildId = 'childId',
  /** column name */
  Content = 'content',
  /** column name */
  Id = 'id'
}

/** expression to compare columns of type Int. All fields are combined with logical 'AND'. */
export type IntComparisonExp = {
  _eq?: Maybe<Scalars['Int']>,
  _gt?: Maybe<Scalars['Int']>,
  _gte?: Maybe<Scalars['Int']>,
  _in?: Maybe<Array<Scalars['Int']>>,
  _is_null?: Maybe<Scalars['Boolean']>,
  _lt?: Maybe<Scalars['Int']>,
  _lte?: Maybe<Scalars['Int']>,
  _neq?: Maybe<Scalars['Int']>,
  _nin?: Maybe<Array<Scalars['Int']>>,
};

/** mutation root */
export type MutationRoot = {
   __typename?: 'mutation_root',
  /** delete data from the table: "children" */
  delete_children?: Maybe<ChildrenMutationResponse>,
  /** delete data from the table: "gifts" */
  delete_gifts?: Maybe<GiftsMutationResponse>,
  /** insert data into the table: "children" */
  insert_children?: Maybe<ChildrenMutationResponse>,
  /** insert data into the table: "gifts" */
  insert_gifts?: Maybe<GiftsMutationResponse>,
  /** update data of the table: "children" */
  update_children?: Maybe<ChildrenMutationResponse>,
  /** update data of the table: "gifts" */
  update_gifts?: Maybe<GiftsMutationResponse>,
};


/** mutation root */
export type MutationRootDeleteChildrenArgs = {
  where: ChildrenBoolExp
};


/** mutation root */
export type MutationRootDeleteGiftsArgs = {
  where: GiftsBoolExp
};


/** mutation root */
export type MutationRootInsertChildrenArgs = {
  objects: Array<ChildrenInsertInput>,
  on_conflict?: Maybe<ChildrenOnConflict>
};


/** mutation root */
export type MutationRootInsertGiftsArgs = {
  objects: Array<GiftsInsertInput>,
  on_conflict?: Maybe<GiftsOnConflict>
};


/** mutation root */
export type MutationRootUpdateChildrenArgs = {
  _inc?: Maybe<ChildrenIncInput>,
  _set?: Maybe<ChildrenSetInput>,
  where: ChildrenBoolExp
};


/** mutation root */
export type MutationRootUpdateGiftsArgs = {
  _set?: Maybe<GiftsSetInput>,
  where: GiftsBoolExp
};

/** column ordering options */
export enum OrderBy {
  /** in the ascending order, nulls last */
  Asc = 'asc',
  /** in the ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in the ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in the descending order, nulls first */
  Desc = 'desc',
  /** in the descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in the descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

/** query root */
export type QueryRoot = {
   __typename?: 'query_root',
  /** fetch data from the table: "children" */
  children: Array<Children>,
  /** fetch aggregated fields from the table: "children" */
  children_aggregate: ChildrenAggregate,
  /** fetch data from the table: "children" using primary key columns */
  children_by_pk?: Maybe<Children>,
  /** fetch data from the table: "gifts" */
  gifts: Array<Gifts>,
  /** fetch aggregated fields from the table: "gifts" */
  gifts_aggregate: GiftsAggregate,
  /** fetch data from the table: "gifts" using primary key columns */
  gifts_by_pk?: Maybe<Gifts>,
};


/** query root */
export type QueryRootChildrenArgs = {
  distinct_on?: Maybe<Array<ChildrenSelectColumn>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<ChildrenOrderBy>>,
  where?: Maybe<ChildrenBoolExp>
};


/** query root */
export type QueryRootChildrenAggregateArgs = {
  distinct_on?: Maybe<Array<ChildrenSelectColumn>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<ChildrenOrderBy>>,
  where?: Maybe<ChildrenBoolExp>
};


/** query root */
export type QueryRootChildrenByPkArgs = {
  id: Scalars['uuid']
};


/** query root */
export type QueryRootGiftsArgs = {
  distinct_on?: Maybe<Array<GiftsSelectColumn>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<GiftsOrderBy>>,
  where?: Maybe<GiftsBoolExp>
};


/** query root */
export type QueryRootGiftsAggregateArgs = {
  distinct_on?: Maybe<Array<GiftsSelectColumn>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<GiftsOrderBy>>,
  where?: Maybe<GiftsBoolExp>
};


/** query root */
export type QueryRootGiftsByPkArgs = {
  id: Scalars['uuid']
};

/** expression to compare columns of type String. All fields are combined with logical 'AND'. */
export type StringComparisonExp = {
  _eq?: Maybe<Scalars['String']>,
  _gt?: Maybe<Scalars['String']>,
  _gte?: Maybe<Scalars['String']>,
  _ilike?: Maybe<Scalars['String']>,
  _in?: Maybe<Array<Scalars['String']>>,
  _is_null?: Maybe<Scalars['Boolean']>,
  _like?: Maybe<Scalars['String']>,
  _lt?: Maybe<Scalars['String']>,
  _lte?: Maybe<Scalars['String']>,
  _neq?: Maybe<Scalars['String']>,
  _nilike?: Maybe<Scalars['String']>,
  _nin?: Maybe<Array<Scalars['String']>>,
  _nlike?: Maybe<Scalars['String']>,
  _nsimilar?: Maybe<Scalars['String']>,
  _similar?: Maybe<Scalars['String']>,
};

/** subscription root */
export type SubscriptionRoot = {
   __typename?: 'subscription_root',
  /** fetch data from the table: "children" */
  children: Array<Children>,
  /** fetch aggregated fields from the table: "children" */
  children_aggregate: ChildrenAggregate,
  /** fetch data from the table: "children" using primary key columns */
  children_by_pk?: Maybe<Children>,
  /** fetch data from the table: "gifts" */
  gifts: Array<Gifts>,
  /** fetch aggregated fields from the table: "gifts" */
  gifts_aggregate: GiftsAggregate,
  /** fetch data from the table: "gifts" using primary key columns */
  gifts_by_pk?: Maybe<Gifts>,
};


/** subscription root */
export type SubscriptionRootChildrenArgs = {
  distinct_on?: Maybe<Array<ChildrenSelectColumn>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<ChildrenOrderBy>>,
  where?: Maybe<ChildrenBoolExp>
};


/** subscription root */
export type SubscriptionRootChildrenAggregateArgs = {
  distinct_on?: Maybe<Array<ChildrenSelectColumn>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<ChildrenOrderBy>>,
  where?: Maybe<ChildrenBoolExp>
};


/** subscription root */
export type SubscriptionRootChildrenByPkArgs = {
  id: Scalars['uuid']
};


/** subscription root */
export type SubscriptionRootGiftsArgs = {
  distinct_on?: Maybe<Array<GiftsSelectColumn>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<GiftsOrderBy>>,
  where?: Maybe<GiftsBoolExp>
};


/** subscription root */
export type SubscriptionRootGiftsAggregateArgs = {
  distinct_on?: Maybe<Array<GiftsSelectColumn>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<GiftsOrderBy>>,
  where?: Maybe<GiftsBoolExp>
};


/** subscription root */
export type SubscriptionRootGiftsByPkArgs = {
  id: Scalars['uuid']
};


/** expression to compare columns of type uuid. All fields are combined with logical 'AND'. */
export type UuidComparisonExp = {
  _eq?: Maybe<Scalars['uuid']>,
  _gt?: Maybe<Scalars['uuid']>,
  _gte?: Maybe<Scalars['uuid']>,
  _in?: Maybe<Array<Scalars['uuid']>>,
  _is_null?: Maybe<Scalars['Boolean']>,
  _lt?: Maybe<Scalars['uuid']>,
  _lte?: Maybe<Scalars['uuid']>,
  _neq?: Maybe<Scalars['uuid']>,
  _nin?: Maybe<Array<Scalars['uuid']>>,
};

export type GetChildrenQueryVariables = {};


export type GetChildrenQuery = (
  { __typename?: 'query_root' }
  & { children: Array<(
    { __typename?: 'children' }
    & Pick<Children, 'id' | 'name' | 'age' | 'isNice'>
  )> }
);


export const GetChildrenDocument = gql`
    query getChildren {
  children {
    id
    name
    age
    isNice
  }
}
    `;

/**
 * __useGetChildrenQuery__
 *
 * To run a query within a React component, call `useGetChildrenQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetChildrenQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetChildrenQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetChildrenQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetChildrenQuery, GetChildrenQueryVariables>) {
        return ApolloReactHooks.useQuery<GetChildrenQuery, GetChildrenQueryVariables>(GetChildrenDocument, baseOptions);
      }
export function useGetChildrenLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetChildrenQuery, GetChildrenQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetChildrenQuery, GetChildrenQueryVariables>(GetChildrenDocument, baseOptions);
        }
export type GetChildrenQueryHookResult = ReturnType<typeof useGetChildrenQuery>;
export type GetChildrenLazyQueryHookResult = ReturnType<typeof useGetChildrenLazyQuery>;
export type GetChildrenQueryResult = ApolloReactCommon.QueryResult<GetChildrenQuery, GetChildrenQueryVariables>;