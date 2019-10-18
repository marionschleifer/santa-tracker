import gql from 'graphql-tag';
export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
  uuid: any,
};

/** expression to compare columns of type Boolean. All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
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
  gifts_aggregate: Gifts_Aggregate,
  id: Scalars['uuid'],
  isNice: Scalars['Boolean'],
  name: Scalars['String'],
};


/** columns and relationships of "children" */
export type ChildrenGiftsArgs = {
  distinct_on?: Maybe<Array<Gifts_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Gifts_Order_By>>,
  where?: Maybe<Gifts_Bool_Exp>
};


/** columns and relationships of "children" */
export type ChildrenGifts_AggregateArgs = {
  distinct_on?: Maybe<Array<Gifts_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Gifts_Order_By>>,
  where?: Maybe<Gifts_Bool_Exp>
};

/** aggregated selection of "children" */
export type Children_Aggregate = {
   __typename?: 'children_aggregate',
  aggregate?: Maybe<Children_Aggregate_Fields>,
  nodes: Array<Children>,
};

/** aggregate fields of "children" */
export type Children_Aggregate_Fields = {
   __typename?: 'children_aggregate_fields',
  avg?: Maybe<Children_Avg_Fields>,
  count?: Maybe<Scalars['Int']>,
  max?: Maybe<Children_Max_Fields>,
  min?: Maybe<Children_Min_Fields>,
  stddev?: Maybe<Children_Stddev_Fields>,
  stddev_pop?: Maybe<Children_Stddev_Pop_Fields>,
  stddev_samp?: Maybe<Children_Stddev_Samp_Fields>,
  sum?: Maybe<Children_Sum_Fields>,
  var_pop?: Maybe<Children_Var_Pop_Fields>,
  var_samp?: Maybe<Children_Var_Samp_Fields>,
  variance?: Maybe<Children_Variance_Fields>,
};


/** aggregate fields of "children" */
export type Children_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Children_Select_Column>>,
  distinct?: Maybe<Scalars['Boolean']>
};

/** order by aggregate values of table "children" */
export type Children_Aggregate_Order_By = {
  avg?: Maybe<Children_Avg_Order_By>,
  count?: Maybe<Order_By>,
  max?: Maybe<Children_Max_Order_By>,
  min?: Maybe<Children_Min_Order_By>,
  stddev?: Maybe<Children_Stddev_Order_By>,
  stddev_pop?: Maybe<Children_Stddev_Pop_Order_By>,
  stddev_samp?: Maybe<Children_Stddev_Samp_Order_By>,
  sum?: Maybe<Children_Sum_Order_By>,
  var_pop?: Maybe<Children_Var_Pop_Order_By>,
  var_samp?: Maybe<Children_Var_Samp_Order_By>,
  variance?: Maybe<Children_Variance_Order_By>,
};

/** input type for inserting array relation for remote table "children" */
export type Children_Arr_Rel_Insert_Input = {
  data: Array<Children_Insert_Input>,
  on_conflict?: Maybe<Children_On_Conflict>,
};

/** aggregate avg on columns */
export type Children_Avg_Fields = {
   __typename?: 'children_avg_fields',
  age?: Maybe<Scalars['Float']>,
};

/** order by avg() on columns of table "children" */
export type Children_Avg_Order_By = {
  age?: Maybe<Order_By>,
};

/** Boolean expression to filter rows from the table "children". All fields are combined with a logical 'AND'. */
export type Children_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Children_Bool_Exp>>>,
  _not?: Maybe<Children_Bool_Exp>,
  _or?: Maybe<Array<Maybe<Children_Bool_Exp>>>,
  age?: Maybe<Int_Comparison_Exp>,
  gifts?: Maybe<Gifts_Bool_Exp>,
  id?: Maybe<Uuid_Comparison_Exp>,
  isNice?: Maybe<Boolean_Comparison_Exp>,
  name?: Maybe<String_Comparison_Exp>,
};

/** unique or primary key constraints on table "children" */
export enum Children_Constraint {
  /** unique or primary key constraint */
  ChildrenPkey = 'children_pkey'
}

/** input type for incrementing integer columne in table "children" */
export type Children_Inc_Input = {
  age?: Maybe<Scalars['Int']>,
};

/** input type for inserting data into table "children" */
export type Children_Insert_Input = {
  age?: Maybe<Scalars['Int']>,
  gifts?: Maybe<Gifts_Arr_Rel_Insert_Input>,
  id?: Maybe<Scalars['uuid']>,
  isNice?: Maybe<Scalars['Boolean']>,
  name?: Maybe<Scalars['String']>,
};

/** aggregate max on columns */
export type Children_Max_Fields = {
   __typename?: 'children_max_fields',
  age?: Maybe<Scalars['Int']>,
  name?: Maybe<Scalars['String']>,
};

/** order by max() on columns of table "children" */
export type Children_Max_Order_By = {
  age?: Maybe<Order_By>,
  name?: Maybe<Order_By>,
};

/** aggregate min on columns */
export type Children_Min_Fields = {
   __typename?: 'children_min_fields',
  age?: Maybe<Scalars['Int']>,
  name?: Maybe<Scalars['String']>,
};

/** order by min() on columns of table "children" */
export type Children_Min_Order_By = {
  age?: Maybe<Order_By>,
  name?: Maybe<Order_By>,
};

/** response of any mutation on the table "children" */
export type Children_Mutation_Response = {
   __typename?: 'children_mutation_response',
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'],
  /** data of the affected rows by the mutation */
  returning: Array<Children>,
};

/** input type for inserting object relation for remote table "children" */
export type Children_Obj_Rel_Insert_Input = {
  data: Children_Insert_Input,
  on_conflict?: Maybe<Children_On_Conflict>,
};

/** on conflict condition type for table "children" */
export type Children_On_Conflict = {
  constraint: Children_Constraint,
  update_columns: Array<Children_Update_Column>,
};

/** ordering options when selecting data from "children" */
export type Children_Order_By = {
  age?: Maybe<Order_By>,
  gifts_aggregate?: Maybe<Gifts_Aggregate_Order_By>,
  id?: Maybe<Order_By>,
  isNice?: Maybe<Order_By>,
  name?: Maybe<Order_By>,
};

/** select columns of table "children" */
export enum Children_Select_Column {
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
export type Children_Set_Input = {
  age?: Maybe<Scalars['Int']>,
  id?: Maybe<Scalars['uuid']>,
  isNice?: Maybe<Scalars['Boolean']>,
  name?: Maybe<Scalars['String']>,
};

/** aggregate stddev on columns */
export type Children_Stddev_Fields = {
   __typename?: 'children_stddev_fields',
  age?: Maybe<Scalars['Float']>,
};

/** order by stddev() on columns of table "children" */
export type Children_Stddev_Order_By = {
  age?: Maybe<Order_By>,
};

/** aggregate stddev_pop on columns */
export type Children_Stddev_Pop_Fields = {
   __typename?: 'children_stddev_pop_fields',
  age?: Maybe<Scalars['Float']>,
};

/** order by stddev_pop() on columns of table "children" */
export type Children_Stddev_Pop_Order_By = {
  age?: Maybe<Order_By>,
};

/** aggregate stddev_samp on columns */
export type Children_Stddev_Samp_Fields = {
   __typename?: 'children_stddev_samp_fields',
  age?: Maybe<Scalars['Float']>,
};

/** order by stddev_samp() on columns of table "children" */
export type Children_Stddev_Samp_Order_By = {
  age?: Maybe<Order_By>,
};

/** aggregate sum on columns */
export type Children_Sum_Fields = {
   __typename?: 'children_sum_fields',
  age?: Maybe<Scalars['Int']>,
};

/** order by sum() on columns of table "children" */
export type Children_Sum_Order_By = {
  age?: Maybe<Order_By>,
};

/** update columns of table "children" */
export enum Children_Update_Column {
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
export type Children_Var_Pop_Fields = {
   __typename?: 'children_var_pop_fields',
  age?: Maybe<Scalars['Float']>,
};

/** order by var_pop() on columns of table "children" */
export type Children_Var_Pop_Order_By = {
  age?: Maybe<Order_By>,
};

/** aggregate var_samp on columns */
export type Children_Var_Samp_Fields = {
   __typename?: 'children_var_samp_fields',
  age?: Maybe<Scalars['Float']>,
};

/** order by var_samp() on columns of table "children" */
export type Children_Var_Samp_Order_By = {
  age?: Maybe<Order_By>,
};

/** aggregate variance on columns */
export type Children_Variance_Fields = {
   __typename?: 'children_variance_fields',
  age?: Maybe<Scalars['Float']>,
};

/** order by variance() on columns of table "children" */
export type Children_Variance_Order_By = {
  age?: Maybe<Order_By>,
};

/** conflict action */
export enum Conflict_Action {
  /** ignore the insert on this row */
  Ignore = 'ignore',
  /** update the row with the given values */
  Update = 'update'
}

/** columns and relationships of "gifts" */
export type Gifts = {
   __typename?: 'gifts',
  child_id?: Maybe<Scalars['uuid']>,
  content: Scalars['String'],
  id: Scalars['uuid'],
};

/** aggregated selection of "gifts" */
export type Gifts_Aggregate = {
   __typename?: 'gifts_aggregate',
  aggregate?: Maybe<Gifts_Aggregate_Fields>,
  nodes: Array<Gifts>,
};

/** aggregate fields of "gifts" */
export type Gifts_Aggregate_Fields = {
   __typename?: 'gifts_aggregate_fields',
  count?: Maybe<Scalars['Int']>,
  max?: Maybe<Gifts_Max_Fields>,
  min?: Maybe<Gifts_Min_Fields>,
};


/** aggregate fields of "gifts" */
export type Gifts_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Gifts_Select_Column>>,
  distinct?: Maybe<Scalars['Boolean']>
};

/** order by aggregate values of table "gifts" */
export type Gifts_Aggregate_Order_By = {
  count?: Maybe<Order_By>,
  max?: Maybe<Gifts_Max_Order_By>,
  min?: Maybe<Gifts_Min_Order_By>,
};

/** input type for inserting array relation for remote table "gifts" */
export type Gifts_Arr_Rel_Insert_Input = {
  data: Array<Gifts_Insert_Input>,
  on_conflict?: Maybe<Gifts_On_Conflict>,
};

/** Boolean expression to filter rows from the table "gifts". All fields are combined with a logical 'AND'. */
export type Gifts_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Gifts_Bool_Exp>>>,
  _not?: Maybe<Gifts_Bool_Exp>,
  _or?: Maybe<Array<Maybe<Gifts_Bool_Exp>>>,
  child_id?: Maybe<Uuid_Comparison_Exp>,
  content?: Maybe<String_Comparison_Exp>,
  id?: Maybe<Uuid_Comparison_Exp>,
};

/** unique or primary key constraints on table "gifts" */
export enum Gifts_Constraint {
  /** unique or primary key constraint */
  GiftsPkey = 'gifts_pkey'
}

/** input type for inserting data into table "gifts" */
export type Gifts_Insert_Input = {
  child_id?: Maybe<Scalars['uuid']>,
  content?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['uuid']>,
};

/** aggregate max on columns */
export type Gifts_Max_Fields = {
   __typename?: 'gifts_max_fields',
  content?: Maybe<Scalars['String']>,
};

/** order by max() on columns of table "gifts" */
export type Gifts_Max_Order_By = {
  content?: Maybe<Order_By>,
};

/** aggregate min on columns */
export type Gifts_Min_Fields = {
   __typename?: 'gifts_min_fields',
  content?: Maybe<Scalars['String']>,
};

/** order by min() on columns of table "gifts" */
export type Gifts_Min_Order_By = {
  content?: Maybe<Order_By>,
};

/** response of any mutation on the table "gifts" */
export type Gifts_Mutation_Response = {
   __typename?: 'gifts_mutation_response',
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'],
  /** data of the affected rows by the mutation */
  returning: Array<Gifts>,
};

/** input type for inserting object relation for remote table "gifts" */
export type Gifts_Obj_Rel_Insert_Input = {
  data: Gifts_Insert_Input,
  on_conflict?: Maybe<Gifts_On_Conflict>,
};

/** on conflict condition type for table "gifts" */
export type Gifts_On_Conflict = {
  constraint: Gifts_Constraint,
  update_columns: Array<Gifts_Update_Column>,
};

/** ordering options when selecting data from "gifts" */
export type Gifts_Order_By = {
  child_id?: Maybe<Order_By>,
  content?: Maybe<Order_By>,
  id?: Maybe<Order_By>,
};

/** select columns of table "gifts" */
export enum Gifts_Select_Column {
  /** column name */
  ChildId = 'child_id',
  /** column name */
  Content = 'content',
  /** column name */
  Id = 'id'
}

/** input type for updating data in table "gifts" */
export type Gifts_Set_Input = {
  child_id?: Maybe<Scalars['uuid']>,
  content?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['uuid']>,
};

/** update columns of table "gifts" */
export enum Gifts_Update_Column {
  /** column name */
  ChildId = 'child_id',
  /** column name */
  Content = 'content',
  /** column name */
  Id = 'id'
}

/** expression to compare columns of type Int. All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
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
export type Mutation_Root = {
   __typename?: 'mutation_root',
  /** delete data from the table: "children" */
  delete_children?: Maybe<Children_Mutation_Response>,
  /** delete data from the table: "gifts" */
  delete_gifts?: Maybe<Gifts_Mutation_Response>,
  /** insert data into the table: "children" */
  insert_children?: Maybe<Children_Mutation_Response>,
  /** insert data into the table: "gifts" */
  insert_gifts?: Maybe<Gifts_Mutation_Response>,
  /** update data of the table: "children" */
  update_children?: Maybe<Children_Mutation_Response>,
  /** update data of the table: "gifts" */
  update_gifts?: Maybe<Gifts_Mutation_Response>,
};


/** mutation root */
export type Mutation_RootDelete_ChildrenArgs = {
  where: Children_Bool_Exp
};


/** mutation root */
export type Mutation_RootDelete_GiftsArgs = {
  where: Gifts_Bool_Exp
};


/** mutation root */
export type Mutation_RootInsert_ChildrenArgs = {
  objects: Array<Children_Insert_Input>,
  on_conflict?: Maybe<Children_On_Conflict>
};


/** mutation root */
export type Mutation_RootInsert_GiftsArgs = {
  objects: Array<Gifts_Insert_Input>,
  on_conflict?: Maybe<Gifts_On_Conflict>
};


/** mutation root */
export type Mutation_RootUpdate_ChildrenArgs = {
  _inc?: Maybe<Children_Inc_Input>,
  _set?: Maybe<Children_Set_Input>,
  where: Children_Bool_Exp
};


/** mutation root */
export type Mutation_RootUpdate_GiftsArgs = {
  _set?: Maybe<Gifts_Set_Input>,
  where: Gifts_Bool_Exp
};

/** column ordering options */
export enum Order_By {
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
export type Query_Root = {
   __typename?: 'query_root',
  /** fetch data from the table: "children" */
  children: Array<Children>,
  /** fetch aggregated fields from the table: "children" */
  children_aggregate: Children_Aggregate,
  /** fetch data from the table: "children" using primary key columns */
  children_by_pk?: Maybe<Children>,
  /** fetch data from the table: "gifts" */
  gifts: Array<Gifts>,
  /** fetch aggregated fields from the table: "gifts" */
  gifts_aggregate: Gifts_Aggregate,
  /** fetch data from the table: "gifts" using primary key columns */
  gifts_by_pk?: Maybe<Gifts>,
};


/** query root */
export type Query_RootChildrenArgs = {
  distinct_on?: Maybe<Array<Children_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Children_Order_By>>,
  where?: Maybe<Children_Bool_Exp>
};


/** query root */
export type Query_RootChildren_AggregateArgs = {
  distinct_on?: Maybe<Array<Children_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Children_Order_By>>,
  where?: Maybe<Children_Bool_Exp>
};


/** query root */
export type Query_RootChildren_By_PkArgs = {
  id: Scalars['uuid']
};


/** query root */
export type Query_RootGiftsArgs = {
  distinct_on?: Maybe<Array<Gifts_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Gifts_Order_By>>,
  where?: Maybe<Gifts_Bool_Exp>
};


/** query root */
export type Query_RootGifts_AggregateArgs = {
  distinct_on?: Maybe<Array<Gifts_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Gifts_Order_By>>,
  where?: Maybe<Gifts_Bool_Exp>
};


/** query root */
export type Query_RootGifts_By_PkArgs = {
  id: Scalars['uuid']
};

/** expression to compare columns of type String. All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
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
export type Subscription_Root = {
   __typename?: 'subscription_root',
  /** fetch data from the table: "children" */
  children: Array<Children>,
  /** fetch aggregated fields from the table: "children" */
  children_aggregate: Children_Aggregate,
  /** fetch data from the table: "children" using primary key columns */
  children_by_pk?: Maybe<Children>,
  /** fetch data from the table: "gifts" */
  gifts: Array<Gifts>,
  /** fetch aggregated fields from the table: "gifts" */
  gifts_aggregate: Gifts_Aggregate,
  /** fetch data from the table: "gifts" using primary key columns */
  gifts_by_pk?: Maybe<Gifts>,
};


/** subscription root */
export type Subscription_RootChildrenArgs = {
  distinct_on?: Maybe<Array<Children_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Children_Order_By>>,
  where?: Maybe<Children_Bool_Exp>
};


/** subscription root */
export type Subscription_RootChildren_AggregateArgs = {
  distinct_on?: Maybe<Array<Children_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Children_Order_By>>,
  where?: Maybe<Children_Bool_Exp>
};


/** subscription root */
export type Subscription_RootChildren_By_PkArgs = {
  id: Scalars['uuid']
};


/** subscription root */
export type Subscription_RootGiftsArgs = {
  distinct_on?: Maybe<Array<Gifts_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Gifts_Order_By>>,
  where?: Maybe<Gifts_Bool_Exp>
};


/** subscription root */
export type Subscription_RootGifts_AggregateArgs = {
  distinct_on?: Maybe<Array<Gifts_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Gifts_Order_By>>,
  where?: Maybe<Gifts_Bool_Exp>
};


/** subscription root */
export type Subscription_RootGifts_By_PkArgs = {
  id: Scalars['uuid']
};


/** expression to compare columns of type uuid. All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
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


