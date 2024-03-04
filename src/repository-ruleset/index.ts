/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/integrations/github/6.0.0/docs/resources/repository_ruleset
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RepositoryRulesetConfig extends cdktf.TerraformMetaArguments {
  /**
  * Possible values for Enforcement are `disabled`, `active`, `evaluate`. Note: `evaluate` is currently only supported for owners of type `organization`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.0.0/docs/resources/repository_ruleset#enforcement RepositoryRuleset#enforcement}
  */
  readonly enforcement: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.0.0/docs/resources/repository_ruleset#id RepositoryRuleset#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the ruleset.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.0.0/docs/resources/repository_ruleset#name RepositoryRuleset#name}
  */
  readonly name: string;
  /**
  * Name of the repository to apply rulset to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.0.0/docs/resources/repository_ruleset#repository RepositoryRuleset#repository}
  */
  readonly repository?: string;
  /**
  * Possible values are `branch` and `tag`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.0.0/docs/resources/repository_ruleset#target RepositoryRuleset#target}
  */
  readonly target: string;
  /**
  * bypass_actors block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.0.0/docs/resources/repository_ruleset#bypass_actors RepositoryRuleset#bypass_actors}
  */
  readonly bypassActors?: RepositoryRulesetBypassActors[] | cdktf.IResolvable;
  /**
  * conditions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.0.0/docs/resources/repository_ruleset#conditions RepositoryRuleset#conditions}
  */
  readonly conditions?: RepositoryRulesetConditions;
  /**
  * rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.0.0/docs/resources/repository_ruleset#rules RepositoryRuleset#rules}
  */
  readonly rules: RepositoryRulesetRules;
}
export interface RepositoryRulesetBypassActors {
  /**
  * The ID of the actor that can bypass a ruleset. When `actor_type` is `OrganizationAdmin`, this should be set to `1`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.0.0/docs/resources/repository_ruleset#actor_id RepositoryRuleset#actor_id}
  */
  readonly actorId: number;
  /**
  * The type of actor that can bypass a ruleset. Can be one of: `RepositoryRole`, `Team`, `Integration`, `OrganizationAdmin`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.0.0/docs/resources/repository_ruleset#actor_type RepositoryRuleset#actor_type}
  */
  readonly actorType: string;
  /**
  * When the specified actor can bypass the ruleset. pull_request means that an actor can only bypass rules on pull requests. Can be one of: `always`, `pull_request`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.0.0/docs/resources/repository_ruleset#bypass_mode RepositoryRuleset#bypass_mode}
  */
  readonly bypassMode: string;
}

export function repositoryRulesetBypassActorsToTerraform(struct?: RepositoryRulesetBypassActors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    actor_id: cdktf.numberToTerraform(struct!.actorId),
    actor_type: cdktf.stringToTerraform(struct!.actorType),
    bypass_mode: cdktf.stringToTerraform(struct!.bypassMode),
  }
}


export function repositoryRulesetBypassActorsToHclTerraform(struct?: RepositoryRulesetBypassActors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    actor_id: {
      value: cdktf.numberToHclTerraform(struct!.actorId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    actor_type: {
      value: cdktf.stringToHclTerraform(struct!.actorType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bypass_mode: {
      value: cdktf.stringToHclTerraform(struct!.bypassMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RepositoryRulesetBypassActorsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): RepositoryRulesetBypassActors | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actorId !== undefined) {
      hasAnyValues = true;
      internalValueResult.actorId = this._actorId;
    }
    if (this._actorType !== undefined) {
      hasAnyValues = true;
      internalValueResult.actorType = this._actorType;
    }
    if (this._bypassMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.bypassMode = this._bypassMode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RepositoryRulesetBypassActors | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._actorId = undefined;
      this._actorType = undefined;
      this._bypassMode = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._actorId = value.actorId;
      this._actorType = value.actorType;
      this._bypassMode = value.bypassMode;
    }
  }

  // actor_id - computed: false, optional: false, required: true
  private _actorId?: number; 
  public get actorId() {
    return this.getNumberAttribute('actor_id');
  }
  public set actorId(value: number) {
    this._actorId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actorIdInput() {
    return this._actorId;
  }

  // actor_type - computed: false, optional: false, required: true
  private _actorType?: string; 
  public get actorType() {
    return this.getStringAttribute('actor_type');
  }
  public set actorType(value: string) {
    this._actorType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actorTypeInput() {
    return this._actorType;
  }

  // bypass_mode - computed: false, optional: false, required: true
  private _bypassMode?: string; 
  public get bypassMode() {
    return this.getStringAttribute('bypass_mode');
  }
  public set bypassMode(value: string) {
    this._bypassMode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bypassModeInput() {
    return this._bypassMode;
  }
}

export class RepositoryRulesetBypassActorsList extends cdktf.ComplexList {
  public internalValue? : RepositoryRulesetBypassActors[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): RepositoryRulesetBypassActorsOutputReference {
    return new RepositoryRulesetBypassActorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RepositoryRulesetConditionsRefName {
  /**
  * Array of ref names or patterns to exclude. The condition will not pass if any of these patterns match.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.0.0/docs/resources/repository_ruleset#exclude RepositoryRuleset#exclude}
  */
  readonly exclude: string[];
  /**
  * Array of ref names or patterns to include. One of these patterns must match for the condition to pass. Also accepts `~DEFAULT_BRANCH` to include the default branch or `~ALL` to include all branches.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.0.0/docs/resources/repository_ruleset#include RepositoryRuleset#include}
  */
  readonly include: string[];
}

export function repositoryRulesetConditionsRefNameToTerraform(struct?: RepositoryRulesetConditionsRefNameOutputReference | RepositoryRulesetConditionsRefName): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exclude: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.exclude),
    include: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.include),
  }
}


export function repositoryRulesetConditionsRefNameToHclTerraform(struct?: RepositoryRulesetConditionsRefNameOutputReference | RepositoryRulesetConditionsRefName): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exclude: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.exclude),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    include: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.include),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RepositoryRulesetConditionsRefNameOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RepositoryRulesetConditionsRefName | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exclude !== undefined) {
      hasAnyValues = true;
      internalValueResult.exclude = this._exclude;
    }
    if (this._include !== undefined) {
      hasAnyValues = true;
      internalValueResult.include = this._include;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RepositoryRulesetConditionsRefName | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._exclude = undefined;
      this._include = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._exclude = value.exclude;
      this._include = value.include;
    }
  }

  // exclude - computed: false, optional: false, required: true
  private _exclude?: string[]; 
  public get exclude() {
    return this.getListAttribute('exclude');
  }
  public set exclude(value: string[]) {
    this._exclude = value;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeInput() {
    return this._exclude;
  }

  // include - computed: false, optional: false, required: true
  private _include?: string[]; 
  public get include() {
    return this.getListAttribute('include');
  }
  public set include(value: string[]) {
    this._include = value;
  }
  // Temporarily expose input value. Use with caution.
  public get includeInput() {
    return this._include;
  }
}
export interface RepositoryRulesetConditions {
  /**
  * ref_name block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.0.0/docs/resources/repository_ruleset#ref_name RepositoryRuleset#ref_name}
  */
  readonly refName: RepositoryRulesetConditionsRefName;
}

export function repositoryRulesetConditionsToTerraform(struct?: RepositoryRulesetConditionsOutputReference | RepositoryRulesetConditions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ref_name: repositoryRulesetConditionsRefNameToTerraform(struct!.refName),
  }
}


export function repositoryRulesetConditionsToHclTerraform(struct?: RepositoryRulesetConditionsOutputReference | RepositoryRulesetConditions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ref_name: {
      value: repositoryRulesetConditionsRefNameToHclTerraform(struct!.refName),
      isBlock: true,
      type: "list",
      storageClassType: "RepositoryRulesetConditionsRefNameList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RepositoryRulesetConditionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RepositoryRulesetConditions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._refName?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.refName = this._refName?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RepositoryRulesetConditions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._refName.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._refName.internalValue = value.refName;
    }
  }

  // ref_name - computed: false, optional: false, required: true
  private _refName = new RepositoryRulesetConditionsRefNameOutputReference(this, "ref_name");
  public get refName() {
    return this._refName;
  }
  public putRefName(value: RepositoryRulesetConditionsRefName) {
    this._refName.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get refNameInput() {
    return this._refName.internalValue;
  }
}
export interface RepositoryRulesetRulesBranchNamePattern {
  /**
  * How this rule will appear to users.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.0.0/docs/resources/repository_ruleset#name RepositoryRuleset#name}
  */
  readonly name?: string;
  /**
  * If true, the rule will fail if the pattern matches.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.0.0/docs/resources/repository_ruleset#negate RepositoryRuleset#negate}
  */
  readonly negate?: boolean | cdktf.IResolvable;
  /**
  * The operator to use for matching. Can be one of: `starts_with`, `ends_with`, `contains`, `regex`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.0.0/docs/resources/repository_ruleset#operator RepositoryRuleset#operator}
  */
  readonly operator: string;
  /**
  * The pattern to match with.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.0.0/docs/resources/repository_ruleset#pattern RepositoryRuleset#pattern}
  */
  readonly pattern: string;
}

export function repositoryRulesetRulesBranchNamePatternToTerraform(struct?: RepositoryRulesetRulesBranchNamePatternOutputReference | RepositoryRulesetRulesBranchNamePattern): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    negate: cdktf.booleanToTerraform(struct!.negate),
    operator: cdktf.stringToTerraform(struct!.operator),
    pattern: cdktf.stringToTerraform(struct!.pattern),
  }
}


export function repositoryRulesetRulesBranchNamePatternToHclTerraform(struct?: RepositoryRulesetRulesBranchNamePatternOutputReference | RepositoryRulesetRulesBranchNamePattern): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    negate: {
      value: cdktf.booleanToHclTerraform(struct!.negate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pattern: {
      value: cdktf.stringToHclTerraform(struct!.pattern),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RepositoryRulesetRulesBranchNamePatternOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RepositoryRulesetRulesBranchNamePattern | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._negate !== undefined) {
      hasAnyValues = true;
      internalValueResult.negate = this._negate;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._pattern !== undefined) {
      hasAnyValues = true;
      internalValueResult.pattern = this._pattern;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RepositoryRulesetRulesBranchNamePattern | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._negate = undefined;
      this._operator = undefined;
      this._pattern = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._negate = value.negate;
      this._operator = value.operator;
      this._pattern = value.pattern;
    }
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // negate - computed: false, optional: true, required: false
  private _negate?: boolean | cdktf.IResolvable; 
  public get negate() {
    return this.getBooleanAttribute('negate');
  }
  public set negate(value: boolean | cdktf.IResolvable) {
    this._negate = value;
  }
  public resetNegate() {
    this._negate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negateInput() {
    return this._negate;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // pattern - computed: false, optional: false, required: true
  private _pattern?: string; 
  public get pattern() {
    return this.getStringAttribute('pattern');
  }
  public set pattern(value: string) {
    this._pattern = value;
  }
  // Temporarily expose input value. Use with caution.
  public get patternInput() {
    return this._pattern;
  }
}
export interface RepositoryRulesetRulesCommitAuthorEmailPattern {
  /**
  * How this rule will appear to users.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.0.0/docs/resources/repository_ruleset#name RepositoryRuleset#name}
  */
  readonly name?: string;
  /**
  * If true, the rule will fail if the pattern matches.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.0.0/docs/resources/repository_ruleset#negate RepositoryRuleset#negate}
  */
  readonly negate?: boolean | cdktf.IResolvable;
  /**
  * The operator to use for matching. Can be one of: `starts_with`, `ends_with`, `contains`, `regex`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.0.0/docs/resources/repository_ruleset#operator RepositoryRuleset#operator}
  */
  readonly operator: string;
  /**
  * The pattern to match with.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.0.0/docs/resources/repository_ruleset#pattern RepositoryRuleset#pattern}
  */
  readonly pattern: string;
}

export function repositoryRulesetRulesCommitAuthorEmailPatternToTerraform(struct?: RepositoryRulesetRulesCommitAuthorEmailPatternOutputReference | RepositoryRulesetRulesCommitAuthorEmailPattern): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    negate: cdktf.booleanToTerraform(struct!.negate),
    operator: cdktf.stringToTerraform(struct!.operator),
    pattern: cdktf.stringToTerraform(struct!.pattern),
  }
}


export function repositoryRulesetRulesCommitAuthorEmailPatternToHclTerraform(struct?: RepositoryRulesetRulesCommitAuthorEmailPatternOutputReference | RepositoryRulesetRulesCommitAuthorEmailPattern): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    negate: {
      value: cdktf.booleanToHclTerraform(struct!.negate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pattern: {
      value: cdktf.stringToHclTerraform(struct!.pattern),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RepositoryRulesetRulesCommitAuthorEmailPatternOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RepositoryRulesetRulesCommitAuthorEmailPattern | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._negate !== undefined) {
      hasAnyValues = true;
      internalValueResult.negate = this._negate;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._pattern !== undefined) {
      hasAnyValues = true;
      internalValueResult.pattern = this._pattern;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RepositoryRulesetRulesCommitAuthorEmailPattern | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._negate = undefined;
      this._operator = undefined;
      this._pattern = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._negate = value.negate;
      this._operator = value.operator;
      this._pattern = value.pattern;
    }
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // negate - computed: false, optional: true, required: false
  private _negate?: boolean | cdktf.IResolvable; 
  public get negate() {
    return this.getBooleanAttribute('negate');
  }
  public set negate(value: boolean | cdktf.IResolvable) {
    this._negate = value;
  }
  public resetNegate() {
    this._negate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negateInput() {
    return this._negate;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // pattern - computed: false, optional: false, required: true
  private _pattern?: string; 
  public get pattern() {
    return this.getStringAttribute('pattern');
  }
  public set pattern(value: string) {
    this._pattern = value;
  }
  // Temporarily expose input value. Use with caution.
  public get patternInput() {
    return this._pattern;
  }
}
export interface RepositoryRulesetRulesCommitMessagePattern {
  /**
  * How this rule will appear to users.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.0.0/docs/resources/repository_ruleset#name RepositoryRuleset#name}
  */
  readonly name?: string;
  /**
  * If true, the rule will fail if the pattern matches.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.0.0/docs/resources/repository_ruleset#negate RepositoryRuleset#negate}
  */
  readonly negate?: boolean | cdktf.IResolvable;
  /**
  * The operator to use for matching. Can be one of: `starts_with`, `ends_with`, `contains`, `regex`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.0.0/docs/resources/repository_ruleset#operator RepositoryRuleset#operator}
  */
  readonly operator: string;
  /**
  * The pattern to match with.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.0.0/docs/resources/repository_ruleset#pattern RepositoryRuleset#pattern}
  */
  readonly pattern: string;
}

export function repositoryRulesetRulesCommitMessagePatternToTerraform(struct?: RepositoryRulesetRulesCommitMessagePatternOutputReference | RepositoryRulesetRulesCommitMessagePattern): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    negate: cdktf.booleanToTerraform(struct!.negate),
    operator: cdktf.stringToTerraform(struct!.operator),
    pattern: cdktf.stringToTerraform(struct!.pattern),
  }
}


export function repositoryRulesetRulesCommitMessagePatternToHclTerraform(struct?: RepositoryRulesetRulesCommitMessagePatternOutputReference | RepositoryRulesetRulesCommitMessagePattern): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    negate: {
      value: cdktf.booleanToHclTerraform(struct!.negate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pattern: {
      value: cdktf.stringToHclTerraform(struct!.pattern),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RepositoryRulesetRulesCommitMessagePatternOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RepositoryRulesetRulesCommitMessagePattern | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._negate !== undefined) {
      hasAnyValues = true;
      internalValueResult.negate = this._negate;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._pattern !== undefined) {
      hasAnyValues = true;
      internalValueResult.pattern = this._pattern;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RepositoryRulesetRulesCommitMessagePattern | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._negate = undefined;
      this._operator = undefined;
      this._pattern = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._negate = value.negate;
      this._operator = value.operator;
      this._pattern = value.pattern;
    }
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // negate - computed: false, optional: true, required: false
  private _negate?: boolean | cdktf.IResolvable; 
  public get negate() {
    return this.getBooleanAttribute('negate');
  }
  public set negate(value: boolean | cdktf.IResolvable) {
    this._negate = value;
  }
  public resetNegate() {
    this._negate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negateInput() {
    return this._negate;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // pattern - computed: false, optional: false, required: true
  private _pattern?: string; 
  public get pattern() {
    return this.getStringAttribute('pattern');
  }
  public set pattern(value: string) {
    this._pattern = value;
  }
  // Temporarily expose input value. Use with caution.
  public get patternInput() {
    return this._pattern;
  }
}
export interface RepositoryRulesetRulesCommitterEmailPattern {
  /**
  * How this rule will appear to users.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.0.0/docs/resources/repository_ruleset#name RepositoryRuleset#name}
  */
  readonly name?: string;
  /**
  * If true, the rule will fail if the pattern matches.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.0.0/docs/resources/repository_ruleset#negate RepositoryRuleset#negate}
  */
  readonly negate?: boolean | cdktf.IResolvable;
  /**
  * The operator to use for matching. Can be one of: `starts_with`, `ends_with`, `contains`, `regex`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.0.0/docs/resources/repository_ruleset#operator RepositoryRuleset#operator}
  */
  readonly operator: string;
  /**
  * The pattern to match with.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.0.0/docs/resources/repository_ruleset#pattern RepositoryRuleset#pattern}
  */
  readonly pattern: string;
}

export function repositoryRulesetRulesCommitterEmailPatternToTerraform(struct?: RepositoryRulesetRulesCommitterEmailPatternOutputReference | RepositoryRulesetRulesCommitterEmailPattern): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    negate: cdktf.booleanToTerraform(struct!.negate),
    operator: cdktf.stringToTerraform(struct!.operator),
    pattern: cdktf.stringToTerraform(struct!.pattern),
  }
}


export function repositoryRulesetRulesCommitterEmailPatternToHclTerraform(struct?: RepositoryRulesetRulesCommitterEmailPatternOutputReference | RepositoryRulesetRulesCommitterEmailPattern): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    negate: {
      value: cdktf.booleanToHclTerraform(struct!.negate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pattern: {
      value: cdktf.stringToHclTerraform(struct!.pattern),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RepositoryRulesetRulesCommitterEmailPatternOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RepositoryRulesetRulesCommitterEmailPattern | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._negate !== undefined) {
      hasAnyValues = true;
      internalValueResult.negate = this._negate;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._pattern !== undefined) {
      hasAnyValues = true;
      internalValueResult.pattern = this._pattern;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RepositoryRulesetRulesCommitterEmailPattern | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._negate = undefined;
      this._operator = undefined;
      this._pattern = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._negate = value.negate;
      this._operator = value.operator;
      this._pattern = value.pattern;
    }
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // negate - computed: false, optional: true, required: false
  private _negate?: boolean | cdktf.IResolvable; 
  public get negate() {
    return this.getBooleanAttribute('negate');
  }
  public set negate(value: boolean | cdktf.IResolvable) {
    this._negate = value;
  }
  public resetNegate() {
    this._negate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negateInput() {
    return this._negate;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // pattern - computed: false, optional: false, required: true
  private _pattern?: string; 
  public get pattern() {
    return this.getStringAttribute('pattern');
  }
  public set pattern(value: string) {
    this._pattern = value;
  }
  // Temporarily expose input value. Use with caution.
  public get patternInput() {
    return this._pattern;
  }
}
export interface RepositoryRulesetRulesPullRequest {
  /**
  * New, reviewable commits pushed will dismiss previous pull request review approvals. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.0.0/docs/resources/repository_ruleset#dismiss_stale_reviews_on_push RepositoryRuleset#dismiss_stale_reviews_on_push}
  */
  readonly dismissStaleReviewsOnPush?: boolean | cdktf.IResolvable;
  /**
  * Require an approving review in pull requests that modify files that have a designated code owner. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.0.0/docs/resources/repository_ruleset#require_code_owner_review RepositoryRuleset#require_code_owner_review}
  */
  readonly requireCodeOwnerReview?: boolean | cdktf.IResolvable;
  /**
  * Whether the most recent reviewable push must be approved by someone other than the person who pushed it. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.0.0/docs/resources/repository_ruleset#require_last_push_approval RepositoryRuleset#require_last_push_approval}
  */
  readonly requireLastPushApproval?: boolean | cdktf.IResolvable;
  /**
  * The number of approving reviews that are required before a pull request can be merged. Defaults to `0`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.0.0/docs/resources/repository_ruleset#required_approving_review_count RepositoryRuleset#required_approving_review_count}
  */
  readonly requiredApprovingReviewCount?: number;
  /**
  * All conversations on code must be resolved before a pull request can be merged. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.0.0/docs/resources/repository_ruleset#required_review_thread_resolution RepositoryRuleset#required_review_thread_resolution}
  */
  readonly requiredReviewThreadResolution?: boolean | cdktf.IResolvable;
}

export function repositoryRulesetRulesPullRequestToTerraform(struct?: RepositoryRulesetRulesPullRequestOutputReference | RepositoryRulesetRulesPullRequest): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dismiss_stale_reviews_on_push: cdktf.booleanToTerraform(struct!.dismissStaleReviewsOnPush),
    require_code_owner_review: cdktf.booleanToTerraform(struct!.requireCodeOwnerReview),
    require_last_push_approval: cdktf.booleanToTerraform(struct!.requireLastPushApproval),
    required_approving_review_count: cdktf.numberToTerraform(struct!.requiredApprovingReviewCount),
    required_review_thread_resolution: cdktf.booleanToTerraform(struct!.requiredReviewThreadResolution),
  }
}


export function repositoryRulesetRulesPullRequestToHclTerraform(struct?: RepositoryRulesetRulesPullRequestOutputReference | RepositoryRulesetRulesPullRequest): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dismiss_stale_reviews_on_push: {
      value: cdktf.booleanToHclTerraform(struct!.dismissStaleReviewsOnPush),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    require_code_owner_review: {
      value: cdktf.booleanToHclTerraform(struct!.requireCodeOwnerReview),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    require_last_push_approval: {
      value: cdktf.booleanToHclTerraform(struct!.requireLastPushApproval),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    required_approving_review_count: {
      value: cdktf.numberToHclTerraform(struct!.requiredApprovingReviewCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    required_review_thread_resolution: {
      value: cdktf.booleanToHclTerraform(struct!.requiredReviewThreadResolution),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RepositoryRulesetRulesPullRequestOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RepositoryRulesetRulesPullRequest | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dismissStaleReviewsOnPush !== undefined) {
      hasAnyValues = true;
      internalValueResult.dismissStaleReviewsOnPush = this._dismissStaleReviewsOnPush;
    }
    if (this._requireCodeOwnerReview !== undefined) {
      hasAnyValues = true;
      internalValueResult.requireCodeOwnerReview = this._requireCodeOwnerReview;
    }
    if (this._requireLastPushApproval !== undefined) {
      hasAnyValues = true;
      internalValueResult.requireLastPushApproval = this._requireLastPushApproval;
    }
    if (this._requiredApprovingReviewCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.requiredApprovingReviewCount = this._requiredApprovingReviewCount;
    }
    if (this._requiredReviewThreadResolution !== undefined) {
      hasAnyValues = true;
      internalValueResult.requiredReviewThreadResolution = this._requiredReviewThreadResolution;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RepositoryRulesetRulesPullRequest | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dismissStaleReviewsOnPush = undefined;
      this._requireCodeOwnerReview = undefined;
      this._requireLastPushApproval = undefined;
      this._requiredApprovingReviewCount = undefined;
      this._requiredReviewThreadResolution = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dismissStaleReviewsOnPush = value.dismissStaleReviewsOnPush;
      this._requireCodeOwnerReview = value.requireCodeOwnerReview;
      this._requireLastPushApproval = value.requireLastPushApproval;
      this._requiredApprovingReviewCount = value.requiredApprovingReviewCount;
      this._requiredReviewThreadResolution = value.requiredReviewThreadResolution;
    }
  }

  // dismiss_stale_reviews_on_push - computed: false, optional: true, required: false
  private _dismissStaleReviewsOnPush?: boolean | cdktf.IResolvable; 
  public get dismissStaleReviewsOnPush() {
    return this.getBooleanAttribute('dismiss_stale_reviews_on_push');
  }
  public set dismissStaleReviewsOnPush(value: boolean | cdktf.IResolvable) {
    this._dismissStaleReviewsOnPush = value;
  }
  public resetDismissStaleReviewsOnPush() {
    this._dismissStaleReviewsOnPush = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dismissStaleReviewsOnPushInput() {
    return this._dismissStaleReviewsOnPush;
  }

  // require_code_owner_review - computed: false, optional: true, required: false
  private _requireCodeOwnerReview?: boolean | cdktf.IResolvable; 
  public get requireCodeOwnerReview() {
    return this.getBooleanAttribute('require_code_owner_review');
  }
  public set requireCodeOwnerReview(value: boolean | cdktf.IResolvable) {
    this._requireCodeOwnerReview = value;
  }
  public resetRequireCodeOwnerReview() {
    this._requireCodeOwnerReview = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requireCodeOwnerReviewInput() {
    return this._requireCodeOwnerReview;
  }

  // require_last_push_approval - computed: false, optional: true, required: false
  private _requireLastPushApproval?: boolean | cdktf.IResolvable; 
  public get requireLastPushApproval() {
    return this.getBooleanAttribute('require_last_push_approval');
  }
  public set requireLastPushApproval(value: boolean | cdktf.IResolvable) {
    this._requireLastPushApproval = value;
  }
  public resetRequireLastPushApproval() {
    this._requireLastPushApproval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requireLastPushApprovalInput() {
    return this._requireLastPushApproval;
  }

  // required_approving_review_count - computed: false, optional: true, required: false
  private _requiredApprovingReviewCount?: number; 
  public get requiredApprovingReviewCount() {
    return this.getNumberAttribute('required_approving_review_count');
  }
  public set requiredApprovingReviewCount(value: number) {
    this._requiredApprovingReviewCount = value;
  }
  public resetRequiredApprovingReviewCount() {
    this._requiredApprovingReviewCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredApprovingReviewCountInput() {
    return this._requiredApprovingReviewCount;
  }

  // required_review_thread_resolution - computed: false, optional: true, required: false
  private _requiredReviewThreadResolution?: boolean | cdktf.IResolvable; 
  public get requiredReviewThreadResolution() {
    return this.getBooleanAttribute('required_review_thread_resolution');
  }
  public set requiredReviewThreadResolution(value: boolean | cdktf.IResolvable) {
    this._requiredReviewThreadResolution = value;
  }
  public resetRequiredReviewThreadResolution() {
    this._requiredReviewThreadResolution = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredReviewThreadResolutionInput() {
    return this._requiredReviewThreadResolution;
  }
}
export interface RepositoryRulesetRulesRequiredDeployments {
  /**
  * The environments that must be successfully deployed to before branches can be merged.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.0.0/docs/resources/repository_ruleset#required_deployment_environments RepositoryRuleset#required_deployment_environments}
  */
  readonly requiredDeploymentEnvironments: string[];
}

export function repositoryRulesetRulesRequiredDeploymentsToTerraform(struct?: RepositoryRulesetRulesRequiredDeploymentsOutputReference | RepositoryRulesetRulesRequiredDeployments): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    required_deployment_environments: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.requiredDeploymentEnvironments),
  }
}


export function repositoryRulesetRulesRequiredDeploymentsToHclTerraform(struct?: RepositoryRulesetRulesRequiredDeploymentsOutputReference | RepositoryRulesetRulesRequiredDeployments): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    required_deployment_environments: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.requiredDeploymentEnvironments),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RepositoryRulesetRulesRequiredDeploymentsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RepositoryRulesetRulesRequiredDeployments | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._requiredDeploymentEnvironments !== undefined) {
      hasAnyValues = true;
      internalValueResult.requiredDeploymentEnvironments = this._requiredDeploymentEnvironments;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RepositoryRulesetRulesRequiredDeployments | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._requiredDeploymentEnvironments = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._requiredDeploymentEnvironments = value.requiredDeploymentEnvironments;
    }
  }

  // required_deployment_environments - computed: false, optional: false, required: true
  private _requiredDeploymentEnvironments?: string[]; 
  public get requiredDeploymentEnvironments() {
    return this.getListAttribute('required_deployment_environments');
  }
  public set requiredDeploymentEnvironments(value: string[]) {
    this._requiredDeploymentEnvironments = value;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredDeploymentEnvironmentsInput() {
    return this._requiredDeploymentEnvironments;
  }
}
export interface RepositoryRulesetRulesRequiredStatusChecksRequiredCheck {
  /**
  * The status check context name that must be present on the commit.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.0.0/docs/resources/repository_ruleset#context RepositoryRuleset#context}
  */
  readonly context: string;
  /**
  * The optional integration ID that this status check must originate from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.0.0/docs/resources/repository_ruleset#integration_id RepositoryRuleset#integration_id}
  */
  readonly integrationId?: number;
}

export function repositoryRulesetRulesRequiredStatusChecksRequiredCheckToTerraform(struct?: RepositoryRulesetRulesRequiredStatusChecksRequiredCheck | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    context: cdktf.stringToTerraform(struct!.context),
    integration_id: cdktf.numberToTerraform(struct!.integrationId),
  }
}


export function repositoryRulesetRulesRequiredStatusChecksRequiredCheckToHclTerraform(struct?: RepositoryRulesetRulesRequiredStatusChecksRequiredCheck | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    context: {
      value: cdktf.stringToHclTerraform(struct!.context),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    integration_id: {
      value: cdktf.numberToHclTerraform(struct!.integrationId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RepositoryRulesetRulesRequiredStatusChecksRequiredCheckOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): RepositoryRulesetRulesRequiredStatusChecksRequiredCheck | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._context !== undefined) {
      hasAnyValues = true;
      internalValueResult.context = this._context;
    }
    if (this._integrationId !== undefined) {
      hasAnyValues = true;
      internalValueResult.integrationId = this._integrationId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RepositoryRulesetRulesRequiredStatusChecksRequiredCheck | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._context = undefined;
      this._integrationId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._context = value.context;
      this._integrationId = value.integrationId;
    }
  }

  // context - computed: false, optional: false, required: true
  private _context?: string; 
  public get context() {
    return this.getStringAttribute('context');
  }
  public set context(value: string) {
    this._context = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contextInput() {
    return this._context;
  }

  // integration_id - computed: false, optional: true, required: false
  private _integrationId?: number; 
  public get integrationId() {
    return this.getNumberAttribute('integration_id');
  }
  public set integrationId(value: number) {
    this._integrationId = value;
  }
  public resetIntegrationId() {
    this._integrationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get integrationIdInput() {
    return this._integrationId;
  }
}

export class RepositoryRulesetRulesRequiredStatusChecksRequiredCheckList extends cdktf.ComplexList {
  public internalValue? : RepositoryRulesetRulesRequiredStatusChecksRequiredCheck[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): RepositoryRulesetRulesRequiredStatusChecksRequiredCheckOutputReference {
    return new RepositoryRulesetRulesRequiredStatusChecksRequiredCheckOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RepositoryRulesetRulesRequiredStatusChecks {
  /**
  * Whether pull requests targeting a matching branch must be tested with the latest code. This setting will not take effect unless at least one status check is enabled. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.0.0/docs/resources/repository_ruleset#strict_required_status_checks_policy RepositoryRuleset#strict_required_status_checks_policy}
  */
  readonly strictRequiredStatusChecksPolicy?: boolean | cdktf.IResolvable;
  /**
  * required_check block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.0.0/docs/resources/repository_ruleset#required_check RepositoryRuleset#required_check}
  */
  readonly requiredCheck: RepositoryRulesetRulesRequiredStatusChecksRequiredCheck[] | cdktf.IResolvable;
}

export function repositoryRulesetRulesRequiredStatusChecksToTerraform(struct?: RepositoryRulesetRulesRequiredStatusChecksOutputReference | RepositoryRulesetRulesRequiredStatusChecks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    strict_required_status_checks_policy: cdktf.booleanToTerraform(struct!.strictRequiredStatusChecksPolicy),
    required_check: cdktf.listMapper(repositoryRulesetRulesRequiredStatusChecksRequiredCheckToTerraform, true)(struct!.requiredCheck),
  }
}


export function repositoryRulesetRulesRequiredStatusChecksToHclTerraform(struct?: RepositoryRulesetRulesRequiredStatusChecksOutputReference | RepositoryRulesetRulesRequiredStatusChecks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    strict_required_status_checks_policy: {
      value: cdktf.booleanToHclTerraform(struct!.strictRequiredStatusChecksPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    required_check: {
      value: cdktf.listMapperHcl(repositoryRulesetRulesRequiredStatusChecksRequiredCheckToHclTerraform, true)(struct!.requiredCheck),
      isBlock: true,
      type: "set",
      storageClassType: "RepositoryRulesetRulesRequiredStatusChecksRequiredCheckList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RepositoryRulesetRulesRequiredStatusChecksOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RepositoryRulesetRulesRequiredStatusChecks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._strictRequiredStatusChecksPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.strictRequiredStatusChecksPolicy = this._strictRequiredStatusChecksPolicy;
    }
    if (this._requiredCheck?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.requiredCheck = this._requiredCheck?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RepositoryRulesetRulesRequiredStatusChecks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._strictRequiredStatusChecksPolicy = undefined;
      this._requiredCheck.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._strictRequiredStatusChecksPolicy = value.strictRequiredStatusChecksPolicy;
      this._requiredCheck.internalValue = value.requiredCheck;
    }
  }

  // strict_required_status_checks_policy - computed: false, optional: true, required: false
  private _strictRequiredStatusChecksPolicy?: boolean | cdktf.IResolvable; 
  public get strictRequiredStatusChecksPolicy() {
    return this.getBooleanAttribute('strict_required_status_checks_policy');
  }
  public set strictRequiredStatusChecksPolicy(value: boolean | cdktf.IResolvable) {
    this._strictRequiredStatusChecksPolicy = value;
  }
  public resetStrictRequiredStatusChecksPolicy() {
    this._strictRequiredStatusChecksPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get strictRequiredStatusChecksPolicyInput() {
    return this._strictRequiredStatusChecksPolicy;
  }

  // required_check - computed: false, optional: false, required: true
  private _requiredCheck = new RepositoryRulesetRulesRequiredStatusChecksRequiredCheckList(this, "required_check", true);
  public get requiredCheck() {
    return this._requiredCheck;
  }
  public putRequiredCheck(value: RepositoryRulesetRulesRequiredStatusChecksRequiredCheck[] | cdktf.IResolvable) {
    this._requiredCheck.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredCheckInput() {
    return this._requiredCheck.internalValue;
  }
}
export interface RepositoryRulesetRulesTagNamePattern {
  /**
  * How this rule will appear to users.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.0.0/docs/resources/repository_ruleset#name RepositoryRuleset#name}
  */
  readonly name?: string;
  /**
  * If true, the rule will fail if the pattern matches.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.0.0/docs/resources/repository_ruleset#negate RepositoryRuleset#negate}
  */
  readonly negate?: boolean | cdktf.IResolvable;
  /**
  * The operator to use for matching. Can be one of: `starts_with`, `ends_with`, `contains`, `regex`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.0.0/docs/resources/repository_ruleset#operator RepositoryRuleset#operator}
  */
  readonly operator: string;
  /**
  * The pattern to match with.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.0.0/docs/resources/repository_ruleset#pattern RepositoryRuleset#pattern}
  */
  readonly pattern: string;
}

export function repositoryRulesetRulesTagNamePatternToTerraform(struct?: RepositoryRulesetRulesTagNamePatternOutputReference | RepositoryRulesetRulesTagNamePattern): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    negate: cdktf.booleanToTerraform(struct!.negate),
    operator: cdktf.stringToTerraform(struct!.operator),
    pattern: cdktf.stringToTerraform(struct!.pattern),
  }
}


export function repositoryRulesetRulesTagNamePatternToHclTerraform(struct?: RepositoryRulesetRulesTagNamePatternOutputReference | RepositoryRulesetRulesTagNamePattern): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    negate: {
      value: cdktf.booleanToHclTerraform(struct!.negate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pattern: {
      value: cdktf.stringToHclTerraform(struct!.pattern),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RepositoryRulesetRulesTagNamePatternOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RepositoryRulesetRulesTagNamePattern | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._negate !== undefined) {
      hasAnyValues = true;
      internalValueResult.negate = this._negate;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._pattern !== undefined) {
      hasAnyValues = true;
      internalValueResult.pattern = this._pattern;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RepositoryRulesetRulesTagNamePattern | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._negate = undefined;
      this._operator = undefined;
      this._pattern = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._negate = value.negate;
      this._operator = value.operator;
      this._pattern = value.pattern;
    }
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // negate - computed: false, optional: true, required: false
  private _negate?: boolean | cdktf.IResolvable; 
  public get negate() {
    return this.getBooleanAttribute('negate');
  }
  public set negate(value: boolean | cdktf.IResolvable) {
    this._negate = value;
  }
  public resetNegate() {
    this._negate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negateInput() {
    return this._negate;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // pattern - computed: false, optional: false, required: true
  private _pattern?: string; 
  public get pattern() {
    return this.getStringAttribute('pattern');
  }
  public set pattern(value: string) {
    this._pattern = value;
  }
  // Temporarily expose input value. Use with caution.
  public get patternInput() {
    return this._pattern;
  }
}
export interface RepositoryRulesetRules {
  /**
  * Only allow users with bypass permission to create matching refs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.0.0/docs/resources/repository_ruleset#creation RepositoryRuleset#creation}
  */
  readonly creation?: boolean | cdktf.IResolvable;
  /**
  * Only allow users with bypass permissions to delete matching refs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.0.0/docs/resources/repository_ruleset#deletion RepositoryRuleset#deletion}
  */
  readonly deletion?: boolean | cdktf.IResolvable;
  /**
  * Prevent users with push access from force pushing to branches.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.0.0/docs/resources/repository_ruleset#non_fast_forward RepositoryRuleset#non_fast_forward}
  */
  readonly nonFastForward?: boolean | cdktf.IResolvable;
  /**
  * Prevent merge commits from being pushed to matching branches.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.0.0/docs/resources/repository_ruleset#required_linear_history RepositoryRuleset#required_linear_history}
  */
  readonly requiredLinearHistory?: boolean | cdktf.IResolvable;
  /**
  * Commits pushed to matching branches must have verified signatures.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.0.0/docs/resources/repository_ruleset#required_signatures RepositoryRuleset#required_signatures}
  */
  readonly requiredSignatures?: boolean | cdktf.IResolvable;
  /**
  * Only allow users with bypass permission to update matching refs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.0.0/docs/resources/repository_ruleset#update RepositoryRuleset#update}
  */
  readonly update?: boolean | cdktf.IResolvable;
  /**
  * Branch can pull changes from its upstream repository. This is only applicable to forked repositories. Requires `update` to be set to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.0.0/docs/resources/repository_ruleset#update_allows_fetch_and_merge RepositoryRuleset#update_allows_fetch_and_merge}
  */
  readonly updateAllowsFetchAndMerge?: boolean | cdktf.IResolvable;
  /**
  * branch_name_pattern block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.0.0/docs/resources/repository_ruleset#branch_name_pattern RepositoryRuleset#branch_name_pattern}
  */
  readonly branchNamePattern?: RepositoryRulesetRulesBranchNamePattern;
  /**
  * commit_author_email_pattern block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.0.0/docs/resources/repository_ruleset#commit_author_email_pattern RepositoryRuleset#commit_author_email_pattern}
  */
  readonly commitAuthorEmailPattern?: RepositoryRulesetRulesCommitAuthorEmailPattern;
  /**
  * commit_message_pattern block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.0.0/docs/resources/repository_ruleset#commit_message_pattern RepositoryRuleset#commit_message_pattern}
  */
  readonly commitMessagePattern?: RepositoryRulesetRulesCommitMessagePattern;
  /**
  * committer_email_pattern block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.0.0/docs/resources/repository_ruleset#committer_email_pattern RepositoryRuleset#committer_email_pattern}
  */
  readonly committerEmailPattern?: RepositoryRulesetRulesCommitterEmailPattern;
  /**
  * pull_request block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.0.0/docs/resources/repository_ruleset#pull_request RepositoryRuleset#pull_request}
  */
  readonly pullRequest?: RepositoryRulesetRulesPullRequest;
  /**
  * required_deployments block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.0.0/docs/resources/repository_ruleset#required_deployments RepositoryRuleset#required_deployments}
  */
  readonly requiredDeployments?: RepositoryRulesetRulesRequiredDeployments;
  /**
  * required_status_checks block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.0.0/docs/resources/repository_ruleset#required_status_checks RepositoryRuleset#required_status_checks}
  */
  readonly requiredStatusChecks?: RepositoryRulesetRulesRequiredStatusChecks;
  /**
  * tag_name_pattern block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.0.0/docs/resources/repository_ruleset#tag_name_pattern RepositoryRuleset#tag_name_pattern}
  */
  readonly tagNamePattern?: RepositoryRulesetRulesTagNamePattern;
}

export function repositoryRulesetRulesToTerraform(struct?: RepositoryRulesetRulesOutputReference | RepositoryRulesetRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    creation: cdktf.booleanToTerraform(struct!.creation),
    deletion: cdktf.booleanToTerraform(struct!.deletion),
    non_fast_forward: cdktf.booleanToTerraform(struct!.nonFastForward),
    required_linear_history: cdktf.booleanToTerraform(struct!.requiredLinearHistory),
    required_signatures: cdktf.booleanToTerraform(struct!.requiredSignatures),
    update: cdktf.booleanToTerraform(struct!.update),
    update_allows_fetch_and_merge: cdktf.booleanToTerraform(struct!.updateAllowsFetchAndMerge),
    branch_name_pattern: repositoryRulesetRulesBranchNamePatternToTerraform(struct!.branchNamePattern),
    commit_author_email_pattern: repositoryRulesetRulesCommitAuthorEmailPatternToTerraform(struct!.commitAuthorEmailPattern),
    commit_message_pattern: repositoryRulesetRulesCommitMessagePatternToTerraform(struct!.commitMessagePattern),
    committer_email_pattern: repositoryRulesetRulesCommitterEmailPatternToTerraform(struct!.committerEmailPattern),
    pull_request: repositoryRulesetRulesPullRequestToTerraform(struct!.pullRequest),
    required_deployments: repositoryRulesetRulesRequiredDeploymentsToTerraform(struct!.requiredDeployments),
    required_status_checks: repositoryRulesetRulesRequiredStatusChecksToTerraform(struct!.requiredStatusChecks),
    tag_name_pattern: repositoryRulesetRulesTagNamePatternToTerraform(struct!.tagNamePattern),
  }
}


export function repositoryRulesetRulesToHclTerraform(struct?: RepositoryRulesetRulesOutputReference | RepositoryRulesetRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    creation: {
      value: cdktf.booleanToHclTerraform(struct!.creation),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    deletion: {
      value: cdktf.booleanToHclTerraform(struct!.deletion),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    non_fast_forward: {
      value: cdktf.booleanToHclTerraform(struct!.nonFastForward),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    required_linear_history: {
      value: cdktf.booleanToHclTerraform(struct!.requiredLinearHistory),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    required_signatures: {
      value: cdktf.booleanToHclTerraform(struct!.requiredSignatures),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    update: {
      value: cdktf.booleanToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    update_allows_fetch_and_merge: {
      value: cdktf.booleanToHclTerraform(struct!.updateAllowsFetchAndMerge),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    branch_name_pattern: {
      value: repositoryRulesetRulesBranchNamePatternToHclTerraform(struct!.branchNamePattern),
      isBlock: true,
      type: "list",
      storageClassType: "RepositoryRulesetRulesBranchNamePatternList",
    },
    commit_author_email_pattern: {
      value: repositoryRulesetRulesCommitAuthorEmailPatternToHclTerraform(struct!.commitAuthorEmailPattern),
      isBlock: true,
      type: "list",
      storageClassType: "RepositoryRulesetRulesCommitAuthorEmailPatternList",
    },
    commit_message_pattern: {
      value: repositoryRulesetRulesCommitMessagePatternToHclTerraform(struct!.commitMessagePattern),
      isBlock: true,
      type: "list",
      storageClassType: "RepositoryRulesetRulesCommitMessagePatternList",
    },
    committer_email_pattern: {
      value: repositoryRulesetRulesCommitterEmailPatternToHclTerraform(struct!.committerEmailPattern),
      isBlock: true,
      type: "list",
      storageClassType: "RepositoryRulesetRulesCommitterEmailPatternList",
    },
    pull_request: {
      value: repositoryRulesetRulesPullRequestToHclTerraform(struct!.pullRequest),
      isBlock: true,
      type: "list",
      storageClassType: "RepositoryRulesetRulesPullRequestList",
    },
    required_deployments: {
      value: repositoryRulesetRulesRequiredDeploymentsToHclTerraform(struct!.requiredDeployments),
      isBlock: true,
      type: "list",
      storageClassType: "RepositoryRulesetRulesRequiredDeploymentsList",
    },
    required_status_checks: {
      value: repositoryRulesetRulesRequiredStatusChecksToHclTerraform(struct!.requiredStatusChecks),
      isBlock: true,
      type: "list",
      storageClassType: "RepositoryRulesetRulesRequiredStatusChecksList",
    },
    tag_name_pattern: {
      value: repositoryRulesetRulesTagNamePatternToHclTerraform(struct!.tagNamePattern),
      isBlock: true,
      type: "list",
      storageClassType: "RepositoryRulesetRulesTagNamePatternList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RepositoryRulesetRulesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RepositoryRulesetRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._creation !== undefined) {
      hasAnyValues = true;
      internalValueResult.creation = this._creation;
    }
    if (this._deletion !== undefined) {
      hasAnyValues = true;
      internalValueResult.deletion = this._deletion;
    }
    if (this._nonFastForward !== undefined) {
      hasAnyValues = true;
      internalValueResult.nonFastForward = this._nonFastForward;
    }
    if (this._requiredLinearHistory !== undefined) {
      hasAnyValues = true;
      internalValueResult.requiredLinearHistory = this._requiredLinearHistory;
    }
    if (this._requiredSignatures !== undefined) {
      hasAnyValues = true;
      internalValueResult.requiredSignatures = this._requiredSignatures;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    if (this._updateAllowsFetchAndMerge !== undefined) {
      hasAnyValues = true;
      internalValueResult.updateAllowsFetchAndMerge = this._updateAllowsFetchAndMerge;
    }
    if (this._branchNamePattern?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.branchNamePattern = this._branchNamePattern?.internalValue;
    }
    if (this._commitAuthorEmailPattern?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.commitAuthorEmailPattern = this._commitAuthorEmailPattern?.internalValue;
    }
    if (this._commitMessagePattern?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.commitMessagePattern = this._commitMessagePattern?.internalValue;
    }
    if (this._committerEmailPattern?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.committerEmailPattern = this._committerEmailPattern?.internalValue;
    }
    if (this._pullRequest?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pullRequest = this._pullRequest?.internalValue;
    }
    if (this._requiredDeployments?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.requiredDeployments = this._requiredDeployments?.internalValue;
    }
    if (this._requiredStatusChecks?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.requiredStatusChecks = this._requiredStatusChecks?.internalValue;
    }
    if (this._tagNamePattern?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagNamePattern = this._tagNamePattern?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RepositoryRulesetRules | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._creation = undefined;
      this._deletion = undefined;
      this._nonFastForward = undefined;
      this._requiredLinearHistory = undefined;
      this._requiredSignatures = undefined;
      this._update = undefined;
      this._updateAllowsFetchAndMerge = undefined;
      this._branchNamePattern.internalValue = undefined;
      this._commitAuthorEmailPattern.internalValue = undefined;
      this._commitMessagePattern.internalValue = undefined;
      this._committerEmailPattern.internalValue = undefined;
      this._pullRequest.internalValue = undefined;
      this._requiredDeployments.internalValue = undefined;
      this._requiredStatusChecks.internalValue = undefined;
      this._tagNamePattern.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._creation = value.creation;
      this._deletion = value.deletion;
      this._nonFastForward = value.nonFastForward;
      this._requiredLinearHistory = value.requiredLinearHistory;
      this._requiredSignatures = value.requiredSignatures;
      this._update = value.update;
      this._updateAllowsFetchAndMerge = value.updateAllowsFetchAndMerge;
      this._branchNamePattern.internalValue = value.branchNamePattern;
      this._commitAuthorEmailPattern.internalValue = value.commitAuthorEmailPattern;
      this._commitMessagePattern.internalValue = value.commitMessagePattern;
      this._committerEmailPattern.internalValue = value.committerEmailPattern;
      this._pullRequest.internalValue = value.pullRequest;
      this._requiredDeployments.internalValue = value.requiredDeployments;
      this._requiredStatusChecks.internalValue = value.requiredStatusChecks;
      this._tagNamePattern.internalValue = value.tagNamePattern;
    }
  }

  // creation - computed: false, optional: true, required: false
  private _creation?: boolean | cdktf.IResolvable; 
  public get creation() {
    return this.getBooleanAttribute('creation');
  }
  public set creation(value: boolean | cdktf.IResolvable) {
    this._creation = value;
  }
  public resetCreation() {
    this._creation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get creationInput() {
    return this._creation;
  }

  // deletion - computed: false, optional: true, required: false
  private _deletion?: boolean | cdktf.IResolvable; 
  public get deletion() {
    return this.getBooleanAttribute('deletion');
  }
  public set deletion(value: boolean | cdktf.IResolvable) {
    this._deletion = value;
  }
  public resetDeletion() {
    this._deletion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deletionInput() {
    return this._deletion;
  }

  // non_fast_forward - computed: false, optional: true, required: false
  private _nonFastForward?: boolean | cdktf.IResolvable; 
  public get nonFastForward() {
    return this.getBooleanAttribute('non_fast_forward');
  }
  public set nonFastForward(value: boolean | cdktf.IResolvable) {
    this._nonFastForward = value;
  }
  public resetNonFastForward() {
    this._nonFastForward = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nonFastForwardInput() {
    return this._nonFastForward;
  }

  // required_linear_history - computed: false, optional: true, required: false
  private _requiredLinearHistory?: boolean | cdktf.IResolvable; 
  public get requiredLinearHistory() {
    return this.getBooleanAttribute('required_linear_history');
  }
  public set requiredLinearHistory(value: boolean | cdktf.IResolvable) {
    this._requiredLinearHistory = value;
  }
  public resetRequiredLinearHistory() {
    this._requiredLinearHistory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredLinearHistoryInput() {
    return this._requiredLinearHistory;
  }

  // required_signatures - computed: false, optional: true, required: false
  private _requiredSignatures?: boolean | cdktf.IResolvable; 
  public get requiredSignatures() {
    return this.getBooleanAttribute('required_signatures');
  }
  public set requiredSignatures(value: boolean | cdktf.IResolvable) {
    this._requiredSignatures = value;
  }
  public resetRequiredSignatures() {
    this._requiredSignatures = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredSignaturesInput() {
    return this._requiredSignatures;
  }

  // update - computed: false, optional: true, required: false
  private _update?: boolean | cdktf.IResolvable; 
  public get update() {
    return this.getBooleanAttribute('update');
  }
  public set update(value: boolean | cdktf.IResolvable) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }

  // update_allows_fetch_and_merge - computed: false, optional: true, required: false
  private _updateAllowsFetchAndMerge?: boolean | cdktf.IResolvable; 
  public get updateAllowsFetchAndMerge() {
    return this.getBooleanAttribute('update_allows_fetch_and_merge');
  }
  public set updateAllowsFetchAndMerge(value: boolean | cdktf.IResolvable) {
    this._updateAllowsFetchAndMerge = value;
  }
  public resetUpdateAllowsFetchAndMerge() {
    this._updateAllowsFetchAndMerge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateAllowsFetchAndMergeInput() {
    return this._updateAllowsFetchAndMerge;
  }

  // branch_name_pattern - computed: false, optional: true, required: false
  private _branchNamePattern = new RepositoryRulesetRulesBranchNamePatternOutputReference(this, "branch_name_pattern");
  public get branchNamePattern() {
    return this._branchNamePattern;
  }
  public putBranchNamePattern(value: RepositoryRulesetRulesBranchNamePattern) {
    this._branchNamePattern.internalValue = value;
  }
  public resetBranchNamePattern() {
    this._branchNamePattern.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get branchNamePatternInput() {
    return this._branchNamePattern.internalValue;
  }

  // commit_author_email_pattern - computed: false, optional: true, required: false
  private _commitAuthorEmailPattern = new RepositoryRulesetRulesCommitAuthorEmailPatternOutputReference(this, "commit_author_email_pattern");
  public get commitAuthorEmailPattern() {
    return this._commitAuthorEmailPattern;
  }
  public putCommitAuthorEmailPattern(value: RepositoryRulesetRulesCommitAuthorEmailPattern) {
    this._commitAuthorEmailPattern.internalValue = value;
  }
  public resetCommitAuthorEmailPattern() {
    this._commitAuthorEmailPattern.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commitAuthorEmailPatternInput() {
    return this._commitAuthorEmailPattern.internalValue;
  }

  // commit_message_pattern - computed: false, optional: true, required: false
  private _commitMessagePattern = new RepositoryRulesetRulesCommitMessagePatternOutputReference(this, "commit_message_pattern");
  public get commitMessagePattern() {
    return this._commitMessagePattern;
  }
  public putCommitMessagePattern(value: RepositoryRulesetRulesCommitMessagePattern) {
    this._commitMessagePattern.internalValue = value;
  }
  public resetCommitMessagePattern() {
    this._commitMessagePattern.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commitMessagePatternInput() {
    return this._commitMessagePattern.internalValue;
  }

  // committer_email_pattern - computed: false, optional: true, required: false
  private _committerEmailPattern = new RepositoryRulesetRulesCommitterEmailPatternOutputReference(this, "committer_email_pattern");
  public get committerEmailPattern() {
    return this._committerEmailPattern;
  }
  public putCommitterEmailPattern(value: RepositoryRulesetRulesCommitterEmailPattern) {
    this._committerEmailPattern.internalValue = value;
  }
  public resetCommitterEmailPattern() {
    this._committerEmailPattern.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get committerEmailPatternInput() {
    return this._committerEmailPattern.internalValue;
  }

  // pull_request - computed: false, optional: true, required: false
  private _pullRequest = new RepositoryRulesetRulesPullRequestOutputReference(this, "pull_request");
  public get pullRequest() {
    return this._pullRequest;
  }
  public putPullRequest(value: RepositoryRulesetRulesPullRequest) {
    this._pullRequest.internalValue = value;
  }
  public resetPullRequest() {
    this._pullRequest.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pullRequestInput() {
    return this._pullRequest.internalValue;
  }

  // required_deployments - computed: false, optional: true, required: false
  private _requiredDeployments = new RepositoryRulesetRulesRequiredDeploymentsOutputReference(this, "required_deployments");
  public get requiredDeployments() {
    return this._requiredDeployments;
  }
  public putRequiredDeployments(value: RepositoryRulesetRulesRequiredDeployments) {
    this._requiredDeployments.internalValue = value;
  }
  public resetRequiredDeployments() {
    this._requiredDeployments.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredDeploymentsInput() {
    return this._requiredDeployments.internalValue;
  }

  // required_status_checks - computed: false, optional: true, required: false
  private _requiredStatusChecks = new RepositoryRulesetRulesRequiredStatusChecksOutputReference(this, "required_status_checks");
  public get requiredStatusChecks() {
    return this._requiredStatusChecks;
  }
  public putRequiredStatusChecks(value: RepositoryRulesetRulesRequiredStatusChecks) {
    this._requiredStatusChecks.internalValue = value;
  }
  public resetRequiredStatusChecks() {
    this._requiredStatusChecks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredStatusChecksInput() {
    return this._requiredStatusChecks.internalValue;
  }

  // tag_name_pattern - computed: false, optional: true, required: false
  private _tagNamePattern = new RepositoryRulesetRulesTagNamePatternOutputReference(this, "tag_name_pattern");
  public get tagNamePattern() {
    return this._tagNamePattern;
  }
  public putTagNamePattern(value: RepositoryRulesetRulesTagNamePattern) {
    this._tagNamePattern.internalValue = value;
  }
  public resetTagNamePattern() {
    this._tagNamePattern.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagNamePatternInput() {
    return this._tagNamePattern.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/6.0.0/docs/resources/repository_ruleset github_repository_ruleset}
*/
export class RepositoryRuleset extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "github_repository_ruleset";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RepositoryRuleset resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RepositoryRuleset to import
  * @param importFromId The id of the existing RepositoryRuleset that should be imported. Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.0.0/docs/resources/repository_ruleset#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RepositoryRuleset to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "github_repository_ruleset", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/integrations/github/6.0.0/docs/resources/repository_ruleset github_repository_ruleset} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RepositoryRulesetConfig
  */
  public constructor(scope: Construct, id: string, config: RepositoryRulesetConfig) {
    super(scope, id, {
      terraformResourceType: 'github_repository_ruleset',
      terraformGeneratorMetadata: {
        providerName: 'github',
        providerVersion: '6.0.0',
        providerVersionConstraint: '~> 6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._enforcement = config.enforcement;
    this._id = config.id;
    this._name = config.name;
    this._repository = config.repository;
    this._target = config.target;
    this._bypassActors.internalValue = config.bypassActors;
    this._conditions.internalValue = config.conditions;
    this._rules.internalValue = config.rules;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // enforcement - computed: false, optional: false, required: true
  private _enforcement?: string; 
  public get enforcement() {
    return this.getStringAttribute('enforcement');
  }
  public set enforcement(value: string) {
    this._enforcement = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enforcementInput() {
    return this._enforcement;
  }

  // etag - computed: true, optional: false, required: false
  public get etag() {
    return this.getStringAttribute('etag');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // node_id - computed: true, optional: false, required: false
  public get nodeId() {
    return this.getStringAttribute('node_id');
  }

  // repository - computed: false, optional: true, required: false
  private _repository?: string; 
  public get repository() {
    return this.getStringAttribute('repository');
  }
  public set repository(value: string) {
    this._repository = value;
  }
  public resetRepository() {
    this._repository = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryInput() {
    return this._repository;
  }

  // ruleset_id - computed: true, optional: false, required: false
  public get rulesetId() {
    return this.getNumberAttribute('ruleset_id');
  }

  // target - computed: false, optional: false, required: true
  private _target?: string; 
  public get target() {
    return this.getStringAttribute('target');
  }
  public set target(value: string) {
    this._target = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target;
  }

  // bypass_actors - computed: false, optional: true, required: false
  private _bypassActors = new RepositoryRulesetBypassActorsList(this, "bypass_actors", false);
  public get bypassActors() {
    return this._bypassActors;
  }
  public putBypassActors(value: RepositoryRulesetBypassActors[] | cdktf.IResolvable) {
    this._bypassActors.internalValue = value;
  }
  public resetBypassActors() {
    this._bypassActors.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bypassActorsInput() {
    return this._bypassActors.internalValue;
  }

  // conditions - computed: false, optional: true, required: false
  private _conditions = new RepositoryRulesetConditionsOutputReference(this, "conditions");
  public get conditions() {
    return this._conditions;
  }
  public putConditions(value: RepositoryRulesetConditions) {
    this._conditions.internalValue = value;
  }
  public resetConditions() {
    this._conditions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionsInput() {
    return this._conditions.internalValue;
  }

  // rules - computed: false, optional: false, required: true
  private _rules = new RepositoryRulesetRulesOutputReference(this, "rules");
  public get rules() {
    return this._rules;
  }
  public putRules(value: RepositoryRulesetRules) {
    this._rules.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesInput() {
    return this._rules.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      enforcement: cdktf.stringToTerraform(this._enforcement),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      repository: cdktf.stringToTerraform(this._repository),
      target: cdktf.stringToTerraform(this._target),
      bypass_actors: cdktf.listMapper(repositoryRulesetBypassActorsToTerraform, true)(this._bypassActors.internalValue),
      conditions: repositoryRulesetConditionsToTerraform(this._conditions.internalValue),
      rules: repositoryRulesetRulesToTerraform(this._rules.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      enforcement: {
        value: cdktf.stringToHclTerraform(this._enforcement),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      repository: {
        value: cdktf.stringToHclTerraform(this._repository),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      target: {
        value: cdktf.stringToHclTerraform(this._target),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bypass_actors: {
        value: cdktf.listMapperHcl(repositoryRulesetBypassActorsToHclTerraform, true)(this._bypassActors.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RepositoryRulesetBypassActorsList",
      },
      conditions: {
        value: repositoryRulesetConditionsToHclTerraform(this._conditions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RepositoryRulesetConditionsList",
      },
      rules: {
        value: repositoryRulesetRulesToHclTerraform(this._rules.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RepositoryRulesetRulesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
