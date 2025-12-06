/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/integrations/github/6.9.0/docs/resources/organization_ruleset
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OrganizationRulesetConfig extends cdktf.TerraformMetaArguments {
  /**
  * Possible values for Enforcement are `disabled`, `active`, `evaluate`. Note: `evaluate` is currently only supported for owners of type `organization`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/resources/organization_ruleset#enforcement OrganizationRuleset#enforcement}
  */
  readonly enforcement: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/resources/organization_ruleset#id OrganizationRuleset#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the ruleset.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/resources/organization_ruleset#name OrganizationRuleset#name}
  */
  readonly name: string;
  /**
  * Possible values are `branch`, `tag` and `push`. Note: The `push` target is in beta and is subject to change.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/resources/organization_ruleset#target OrganizationRuleset#target}
  */
  readonly target: string;
  /**
  * bypass_actors block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/resources/organization_ruleset#bypass_actors OrganizationRuleset#bypass_actors}
  */
  readonly bypassActors?: OrganizationRulesetBypassActors[] | cdktf.IResolvable;
  /**
  * conditions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/resources/organization_ruleset#conditions OrganizationRuleset#conditions}
  */
  readonly conditions?: OrganizationRulesetConditions;
  /**
  * rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/resources/organization_ruleset#rules OrganizationRuleset#rules}
  */
  readonly rules: OrganizationRulesetRules;
}
export interface OrganizationRulesetBypassActors {
  /**
  * The ID of the actor that can bypass a ruleset. When `actor_type` is `OrganizationAdmin`, this should be set to `1`. Some resources such as DeployKey do not have an ID and this should be omitted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/resources/organization_ruleset#actor_id OrganizationRuleset#actor_id}
  */
  readonly actorId?: number;
  /**
  * The type of actor that can bypass a ruleset. See https://docs.github.com/en/rest/orgs/rules for more information
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/resources/organization_ruleset#actor_type OrganizationRuleset#actor_type}
  */
  readonly actorType: string;
  /**
  * When the specified actor can bypass the ruleset. pull_request means that an actor can only bypass rules on pull requests. Can be one of: `always`, `pull_request`, `exempt`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/resources/organization_ruleset#bypass_mode OrganizationRuleset#bypass_mode}
  */
  readonly bypassMode: string;
}

export function organizationRulesetBypassActorsToTerraform(struct?: OrganizationRulesetBypassActors | cdktf.IResolvable): any {
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


export function organizationRulesetBypassActorsToHclTerraform(struct?: OrganizationRulesetBypassActors | cdktf.IResolvable): any {
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

export class OrganizationRulesetBypassActorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OrganizationRulesetBypassActors | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OrganizationRulesetBypassActors | cdktf.IResolvable | undefined) {
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

  // actor_id - computed: false, optional: true, required: false
  private _actorId?: number; 
  public get actorId() {
    return this.getNumberAttribute('actor_id');
  }
  public set actorId(value: number) {
    this._actorId = value;
  }
  public resetActorId() {
    this._actorId = undefined;
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

export class OrganizationRulesetBypassActorsList extends cdktf.ComplexList {
  public internalValue? : OrganizationRulesetBypassActors[] | cdktf.IResolvable

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
  public get(index: number): OrganizationRulesetBypassActorsOutputReference {
    return new OrganizationRulesetBypassActorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OrganizationRulesetConditionsRefName {
  /**
  * Array of ref names or patterns to exclude. The condition will not pass if any of these patterns match.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/resources/organization_ruleset#exclude OrganizationRuleset#exclude}
  */
  readonly exclude: string[];
  /**
  * Array of ref names or patterns to include. One of these patterns must match for the condition to pass. Also accepts `~DEFAULT_BRANCH` to include the default branch or `~ALL` to include all branches.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/resources/organization_ruleset#include OrganizationRuleset#include}
  */
  readonly include: string[];
}

export function organizationRulesetConditionsRefNameToTerraform(struct?: OrganizationRulesetConditionsRefNameOutputReference | OrganizationRulesetConditionsRefName): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exclude: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.exclude),
    include: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.include),
  }
}


export function organizationRulesetConditionsRefNameToHclTerraform(struct?: OrganizationRulesetConditionsRefNameOutputReference | OrganizationRulesetConditionsRefName): any {
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

export class OrganizationRulesetConditionsRefNameOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OrganizationRulesetConditionsRefName | undefined {
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

  public set internalValue(value: OrganizationRulesetConditionsRefName | undefined) {
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
export interface OrganizationRulesetConditionsRepositoryName {
  /**
  * Array of repository names or patterns to exclude. The condition will not pass if any of these patterns match.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/resources/organization_ruleset#exclude OrganizationRuleset#exclude}
  */
  readonly exclude: string[];
  /**
  * Array of repository names or patterns to include. One of these patterns must match for the condition to pass. Also accepts `~ALL` to include all repositories.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/resources/organization_ruleset#include OrganizationRuleset#include}
  */
  readonly include: string[];
  /**
  * Whether renaming of target repositories is prevented.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/resources/organization_ruleset#protected OrganizationRuleset#protected}
  */
  readonly protected?: boolean | cdktf.IResolvable;
}

export function organizationRulesetConditionsRepositoryNameToTerraform(struct?: OrganizationRulesetConditionsRepositoryNameOutputReference | OrganizationRulesetConditionsRepositoryName): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exclude: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.exclude),
    include: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.include),
    protected: cdktf.booleanToTerraform(struct!.protected),
  }
}


export function organizationRulesetConditionsRepositoryNameToHclTerraform(struct?: OrganizationRulesetConditionsRepositoryNameOutputReference | OrganizationRulesetConditionsRepositoryName): any {
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
    protected: {
      value: cdktf.booleanToHclTerraform(struct!.protected),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrganizationRulesetConditionsRepositoryNameOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OrganizationRulesetConditionsRepositoryName | undefined {
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
    if (this._protected !== undefined) {
      hasAnyValues = true;
      internalValueResult.protected = this._protected;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrganizationRulesetConditionsRepositoryName | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._exclude = undefined;
      this._include = undefined;
      this._protected = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._exclude = value.exclude;
      this._include = value.include;
      this._protected = value.protected;
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

  // protected - computed: false, optional: true, required: false
  private _protected?: boolean | cdktf.IResolvable; 
  public get protected() {
    return this.getBooleanAttribute('protected');
  }
  public set protected(value: boolean | cdktf.IResolvable) {
    this._protected = value;
  }
  public resetProtected() {
    this._protected = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protectedInput() {
    return this._protected;
  }
}
export interface OrganizationRulesetConditions {
  /**
  * The repository IDs that the ruleset applies to. One of these IDs must match for the condition to pass.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/resources/organization_ruleset#repository_id OrganizationRuleset#repository_id}
  */
  readonly repositoryId?: number[];
  /**
  * ref_name block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/resources/organization_ruleset#ref_name OrganizationRuleset#ref_name}
  */
  readonly refName: OrganizationRulesetConditionsRefName;
  /**
  * repository_name block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/resources/organization_ruleset#repository_name OrganizationRuleset#repository_name}
  */
  readonly repositoryName?: OrganizationRulesetConditionsRepositoryName;
}

export function organizationRulesetConditionsToTerraform(struct?: OrganizationRulesetConditionsOutputReference | OrganizationRulesetConditions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    repository_id: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.repositoryId),
    ref_name: organizationRulesetConditionsRefNameToTerraform(struct!.refName),
    repository_name: organizationRulesetConditionsRepositoryNameToTerraform(struct!.repositoryName),
  }
}


export function organizationRulesetConditionsToHclTerraform(struct?: OrganizationRulesetConditionsOutputReference | OrganizationRulesetConditions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    repository_id: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.repositoryId),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
    ref_name: {
      value: organizationRulesetConditionsRefNameToHclTerraform(struct!.refName),
      isBlock: true,
      type: "list",
      storageClassType: "OrganizationRulesetConditionsRefNameList",
    },
    repository_name: {
      value: organizationRulesetConditionsRepositoryNameToHclTerraform(struct!.repositoryName),
      isBlock: true,
      type: "list",
      storageClassType: "OrganizationRulesetConditionsRepositoryNameList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrganizationRulesetConditionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OrganizationRulesetConditions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._repositoryId !== undefined) {
      hasAnyValues = true;
      internalValueResult.repositoryId = this._repositoryId;
    }
    if (this._refName?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.refName = this._refName?.internalValue;
    }
    if (this._repositoryName?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.repositoryName = this._repositoryName?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrganizationRulesetConditions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._repositoryId = undefined;
      this._refName.internalValue = undefined;
      this._repositoryName.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._repositoryId = value.repositoryId;
      this._refName.internalValue = value.refName;
      this._repositoryName.internalValue = value.repositoryName;
    }
  }

  // repository_id - computed: false, optional: true, required: false
  private _repositoryId?: number[]; 
  public get repositoryId() {
    return this.getNumberListAttribute('repository_id');
  }
  public set repositoryId(value: number[]) {
    this._repositoryId = value;
  }
  public resetRepositoryId() {
    this._repositoryId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryIdInput() {
    return this._repositoryId;
  }

  // ref_name - computed: false, optional: false, required: true
  private _refName = new OrganizationRulesetConditionsRefNameOutputReference(this, "ref_name");
  public get refName() {
    return this._refName;
  }
  public putRefName(value: OrganizationRulesetConditionsRefName) {
    this._refName.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get refNameInput() {
    return this._refName.internalValue;
  }

  // repository_name - computed: false, optional: true, required: false
  private _repositoryName = new OrganizationRulesetConditionsRepositoryNameOutputReference(this, "repository_name");
  public get repositoryName() {
    return this._repositoryName;
  }
  public putRepositoryName(value: OrganizationRulesetConditionsRepositoryName) {
    this._repositoryName.internalValue = value;
  }
  public resetRepositoryName() {
    this._repositoryName.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryNameInput() {
    return this._repositoryName.internalValue;
  }
}
export interface OrganizationRulesetRulesBranchNamePattern {
  /**
  * How this rule will appear to users.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/resources/organization_ruleset#name OrganizationRuleset#name}
  */
  readonly name?: string;
  /**
  * If true, the rule will fail if the pattern matches.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/resources/organization_ruleset#negate OrganizationRuleset#negate}
  */
  readonly negate?: boolean | cdktf.IResolvable;
  /**
  * The operator to use for matching. Can be one of: `starts_with`, `ends_with`, `contains`, `regex`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/resources/organization_ruleset#operator OrganizationRuleset#operator}
  */
  readonly operator: string;
  /**
  * The pattern to match with.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/resources/organization_ruleset#pattern OrganizationRuleset#pattern}
  */
  readonly pattern: string;
}

export function organizationRulesetRulesBranchNamePatternToTerraform(struct?: OrganizationRulesetRulesBranchNamePatternOutputReference | OrganizationRulesetRulesBranchNamePattern): any {
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


export function organizationRulesetRulesBranchNamePatternToHclTerraform(struct?: OrganizationRulesetRulesBranchNamePatternOutputReference | OrganizationRulesetRulesBranchNamePattern): any {
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

export class OrganizationRulesetRulesBranchNamePatternOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OrganizationRulesetRulesBranchNamePattern | undefined {
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

  public set internalValue(value: OrganizationRulesetRulesBranchNamePattern | undefined) {
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
export interface OrganizationRulesetRulesCommitAuthorEmailPattern {
  /**
  * How this rule will appear to users.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/resources/organization_ruleset#name OrganizationRuleset#name}
  */
  readonly name?: string;
  /**
  * If true, the rule will fail if the pattern matches.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/resources/organization_ruleset#negate OrganizationRuleset#negate}
  */
  readonly negate?: boolean | cdktf.IResolvable;
  /**
  * The operator to use for matching. Can be one of: `starts_with`, `ends_with`, `contains`, `regex`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/resources/organization_ruleset#operator OrganizationRuleset#operator}
  */
  readonly operator: string;
  /**
  * The pattern to match with.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/resources/organization_ruleset#pattern OrganizationRuleset#pattern}
  */
  readonly pattern: string;
}

export function organizationRulesetRulesCommitAuthorEmailPatternToTerraform(struct?: OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference | OrganizationRulesetRulesCommitAuthorEmailPattern): any {
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


export function organizationRulesetRulesCommitAuthorEmailPatternToHclTerraform(struct?: OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference | OrganizationRulesetRulesCommitAuthorEmailPattern): any {
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

export class OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OrganizationRulesetRulesCommitAuthorEmailPattern | undefined {
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

  public set internalValue(value: OrganizationRulesetRulesCommitAuthorEmailPattern | undefined) {
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
export interface OrganizationRulesetRulesCommitMessagePattern {
  /**
  * How this rule will appear to users.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/resources/organization_ruleset#name OrganizationRuleset#name}
  */
  readonly name?: string;
  /**
  * If true, the rule will fail if the pattern matches.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/resources/organization_ruleset#negate OrganizationRuleset#negate}
  */
  readonly negate?: boolean | cdktf.IResolvable;
  /**
  * The operator to use for matching. Can be one of: `starts_with`, `ends_with`, `contains`, `regex`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/resources/organization_ruleset#operator OrganizationRuleset#operator}
  */
  readonly operator: string;
  /**
  * The pattern to match with.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/resources/organization_ruleset#pattern OrganizationRuleset#pattern}
  */
  readonly pattern: string;
}

export function organizationRulesetRulesCommitMessagePatternToTerraform(struct?: OrganizationRulesetRulesCommitMessagePatternOutputReference | OrganizationRulesetRulesCommitMessagePattern): any {
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


export function organizationRulesetRulesCommitMessagePatternToHclTerraform(struct?: OrganizationRulesetRulesCommitMessagePatternOutputReference | OrganizationRulesetRulesCommitMessagePattern): any {
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

export class OrganizationRulesetRulesCommitMessagePatternOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OrganizationRulesetRulesCommitMessagePattern | undefined {
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

  public set internalValue(value: OrganizationRulesetRulesCommitMessagePattern | undefined) {
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
export interface OrganizationRulesetRulesCommitterEmailPattern {
  /**
  * How this rule will appear to users.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/resources/organization_ruleset#name OrganizationRuleset#name}
  */
  readonly name?: string;
  /**
  * If true, the rule will fail if the pattern matches.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/resources/organization_ruleset#negate OrganizationRuleset#negate}
  */
  readonly negate?: boolean | cdktf.IResolvable;
  /**
  * The operator to use for matching. Can be one of: `starts_with`, `ends_with`, `contains`, `regex`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/resources/organization_ruleset#operator OrganizationRuleset#operator}
  */
  readonly operator: string;
  /**
  * The pattern to match with.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/resources/organization_ruleset#pattern OrganizationRuleset#pattern}
  */
  readonly pattern: string;
}

export function organizationRulesetRulesCommitterEmailPatternToTerraform(struct?: OrganizationRulesetRulesCommitterEmailPatternOutputReference | OrganizationRulesetRulesCommitterEmailPattern): any {
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


export function organizationRulesetRulesCommitterEmailPatternToHclTerraform(struct?: OrganizationRulesetRulesCommitterEmailPatternOutputReference | OrganizationRulesetRulesCommitterEmailPattern): any {
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

export class OrganizationRulesetRulesCommitterEmailPatternOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OrganizationRulesetRulesCommitterEmailPattern | undefined {
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

  public set internalValue(value: OrganizationRulesetRulesCommitterEmailPattern | undefined) {
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
export interface OrganizationRulesetRulesFileExtensionRestriction {
  /**
  * The file extensions that are restricted from being pushed to the commit graph.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/resources/organization_ruleset#restricted_file_extensions OrganizationRuleset#restricted_file_extensions}
  */
  readonly restrictedFileExtensions: string[];
}

export function organizationRulesetRulesFileExtensionRestrictionToTerraform(struct?: OrganizationRulesetRulesFileExtensionRestrictionOutputReference | OrganizationRulesetRulesFileExtensionRestriction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    restricted_file_extensions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.restrictedFileExtensions),
  }
}


export function organizationRulesetRulesFileExtensionRestrictionToHclTerraform(struct?: OrganizationRulesetRulesFileExtensionRestrictionOutputReference | OrganizationRulesetRulesFileExtensionRestriction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    restricted_file_extensions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.restrictedFileExtensions),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrganizationRulesetRulesFileExtensionRestrictionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OrganizationRulesetRulesFileExtensionRestriction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._restrictedFileExtensions !== undefined) {
      hasAnyValues = true;
      internalValueResult.restrictedFileExtensions = this._restrictedFileExtensions;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrganizationRulesetRulesFileExtensionRestriction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._restrictedFileExtensions = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._restrictedFileExtensions = value.restrictedFileExtensions;
    }
  }

  // restricted_file_extensions - computed: false, optional: false, required: true
  private _restrictedFileExtensions?: string[]; 
  public get restrictedFileExtensions() {
    return cdktf.Fn.tolist(this.getListAttribute('restricted_file_extensions'));
  }
  public set restrictedFileExtensions(value: string[]) {
    this._restrictedFileExtensions = value;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictedFileExtensionsInput() {
    return this._restrictedFileExtensions;
  }
}
export interface OrganizationRulesetRulesFilePathRestriction {
  /**
  * The file paths that are restricted from being pushed to the commit graph.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/resources/organization_ruleset#restricted_file_paths OrganizationRuleset#restricted_file_paths}
  */
  readonly restrictedFilePaths: string[];
}

export function organizationRulesetRulesFilePathRestrictionToTerraform(struct?: OrganizationRulesetRulesFilePathRestrictionOutputReference | OrganizationRulesetRulesFilePathRestriction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    restricted_file_paths: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.restrictedFilePaths),
  }
}


export function organizationRulesetRulesFilePathRestrictionToHclTerraform(struct?: OrganizationRulesetRulesFilePathRestrictionOutputReference | OrganizationRulesetRulesFilePathRestriction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    restricted_file_paths: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.restrictedFilePaths),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrganizationRulesetRulesFilePathRestrictionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OrganizationRulesetRulesFilePathRestriction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._restrictedFilePaths !== undefined) {
      hasAnyValues = true;
      internalValueResult.restrictedFilePaths = this._restrictedFilePaths;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrganizationRulesetRulesFilePathRestriction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._restrictedFilePaths = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._restrictedFilePaths = value.restrictedFilePaths;
    }
  }

  // restricted_file_paths - computed: false, optional: false, required: true
  private _restrictedFilePaths?: string[]; 
  public get restrictedFilePaths() {
    return this.getListAttribute('restricted_file_paths');
  }
  public set restrictedFilePaths(value: string[]) {
    this._restrictedFilePaths = value;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictedFilePathsInput() {
    return this._restrictedFilePaths;
  }
}
export interface OrganizationRulesetRulesMaxFilePathLength {
  /**
  * The maximum allowed length of a file path.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/resources/organization_ruleset#max_file_path_length OrganizationRuleset#max_file_path_length}
  */
  readonly maxFilePathLength: number;
}

export function organizationRulesetRulesMaxFilePathLengthToTerraform(struct?: OrganizationRulesetRulesMaxFilePathLengthOutputReference | OrganizationRulesetRulesMaxFilePathLength): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_file_path_length: cdktf.numberToTerraform(struct!.maxFilePathLength),
  }
}


export function organizationRulesetRulesMaxFilePathLengthToHclTerraform(struct?: OrganizationRulesetRulesMaxFilePathLengthOutputReference | OrganizationRulesetRulesMaxFilePathLength): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_file_path_length: {
      value: cdktf.numberToHclTerraform(struct!.maxFilePathLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrganizationRulesetRulesMaxFilePathLengthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OrganizationRulesetRulesMaxFilePathLength | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxFilePathLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxFilePathLength = this._maxFilePathLength;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrganizationRulesetRulesMaxFilePathLength | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maxFilePathLength = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maxFilePathLength = value.maxFilePathLength;
    }
  }

  // max_file_path_length - computed: false, optional: false, required: true
  private _maxFilePathLength?: number; 
  public get maxFilePathLength() {
    return this.getNumberAttribute('max_file_path_length');
  }
  public set maxFilePathLength(value: number) {
    this._maxFilePathLength = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxFilePathLengthInput() {
    return this._maxFilePathLength;
  }
}
export interface OrganizationRulesetRulesMaxFileSize {
  /**
  * The maximum allowed size of a file in megabytes (MB). Valid range is 1-100 MB.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/resources/organization_ruleset#max_file_size OrganizationRuleset#max_file_size}
  */
  readonly maxFileSize: number;
}

export function organizationRulesetRulesMaxFileSizeToTerraform(struct?: OrganizationRulesetRulesMaxFileSizeOutputReference | OrganizationRulesetRulesMaxFileSize): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_file_size: cdktf.numberToTerraform(struct!.maxFileSize),
  }
}


export function organizationRulesetRulesMaxFileSizeToHclTerraform(struct?: OrganizationRulesetRulesMaxFileSizeOutputReference | OrganizationRulesetRulesMaxFileSize): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_file_size: {
      value: cdktf.numberToHclTerraform(struct!.maxFileSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrganizationRulesetRulesMaxFileSizeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OrganizationRulesetRulesMaxFileSize | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxFileSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxFileSize = this._maxFileSize;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrganizationRulesetRulesMaxFileSize | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maxFileSize = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maxFileSize = value.maxFileSize;
    }
  }

  // max_file_size - computed: false, optional: false, required: true
  private _maxFileSize?: number; 
  public get maxFileSize() {
    return this.getNumberAttribute('max_file_size');
  }
  public set maxFileSize(value: number) {
    this._maxFileSize = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxFileSizeInput() {
    return this._maxFileSize;
  }
}
export interface OrganizationRulesetRulesPullRequest {
  /**
  * New, reviewable commits pushed will dismiss previous pull request review approvals. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/resources/organization_ruleset#dismiss_stale_reviews_on_push OrganizationRuleset#dismiss_stale_reviews_on_push}
  */
  readonly dismissStaleReviewsOnPush?: boolean | cdktf.IResolvable;
  /**
  * Require an approving review in pull requests that modify files that have a designated code owner. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/resources/organization_ruleset#require_code_owner_review OrganizationRuleset#require_code_owner_review}
  */
  readonly requireCodeOwnerReview?: boolean | cdktf.IResolvable;
  /**
  * Whether the most recent reviewable push must be approved by someone other than the person who pushed it. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/resources/organization_ruleset#require_last_push_approval OrganizationRuleset#require_last_push_approval}
  */
  readonly requireLastPushApproval?: boolean | cdktf.IResolvable;
  /**
  * The number of approving reviews that are required before a pull request can be merged. Defaults to `0`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/resources/organization_ruleset#required_approving_review_count OrganizationRuleset#required_approving_review_count}
  */
  readonly requiredApprovingReviewCount?: number;
  /**
  * All conversations on code must be resolved before a pull request can be merged. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/resources/organization_ruleset#required_review_thread_resolution OrganizationRuleset#required_review_thread_resolution}
  */
  readonly requiredReviewThreadResolution?: boolean | cdktf.IResolvable;
}

export function organizationRulesetRulesPullRequestToTerraform(struct?: OrganizationRulesetRulesPullRequestOutputReference | OrganizationRulesetRulesPullRequest): any {
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


export function organizationRulesetRulesPullRequestToHclTerraform(struct?: OrganizationRulesetRulesPullRequestOutputReference | OrganizationRulesetRulesPullRequest): any {
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

export class OrganizationRulesetRulesPullRequestOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OrganizationRulesetRulesPullRequest | undefined {
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

  public set internalValue(value: OrganizationRulesetRulesPullRequest | undefined) {
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
export interface OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningTool {
  /**
  * The severity level at which code scanning results that raise alerts block a reference update. Can be one of: `none`, `errors`, `errors_and_warnings`, `all`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/resources/organization_ruleset#alerts_threshold OrganizationRuleset#alerts_threshold}
  */
  readonly alertsThreshold: string;
  /**
  * The severity level at which code scanning results that raise security alerts block a reference update. Can be one of: `none`, `critical`, `high_or_higher`, `medium_or_higher`, `all`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/resources/organization_ruleset#security_alerts_threshold OrganizationRuleset#security_alerts_threshold}
  */
  readonly securityAlertsThreshold: string;
  /**
  * The name of a code scanning tool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/resources/organization_ruleset#tool OrganizationRuleset#tool}
  */
  readonly tool: string;
}

export function organizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolToTerraform(struct?: OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningTool | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alerts_threshold: cdktf.stringToTerraform(struct!.alertsThreshold),
    security_alerts_threshold: cdktf.stringToTerraform(struct!.securityAlertsThreshold),
    tool: cdktf.stringToTerraform(struct!.tool),
  }
}


export function organizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolToHclTerraform(struct?: OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningTool | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    alerts_threshold: {
      value: cdktf.stringToHclTerraform(struct!.alertsThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    security_alerts_threshold: {
      value: cdktf.stringToHclTerraform(struct!.securityAlertsThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tool: {
      value: cdktf.stringToHclTerraform(struct!.tool),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningTool | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alertsThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.alertsThreshold = this._alertsThreshold;
    }
    if (this._securityAlertsThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityAlertsThreshold = this._securityAlertsThreshold;
    }
    if (this._tool !== undefined) {
      hasAnyValues = true;
      internalValueResult.tool = this._tool;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningTool | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._alertsThreshold = undefined;
      this._securityAlertsThreshold = undefined;
      this._tool = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._alertsThreshold = value.alertsThreshold;
      this._securityAlertsThreshold = value.securityAlertsThreshold;
      this._tool = value.tool;
    }
  }

  // alerts_threshold - computed: false, optional: false, required: true
  private _alertsThreshold?: string; 
  public get alertsThreshold() {
    return this.getStringAttribute('alerts_threshold');
  }
  public set alertsThreshold(value: string) {
    this._alertsThreshold = value;
  }
  // Temporarily expose input value. Use with caution.
  public get alertsThresholdInput() {
    return this._alertsThreshold;
  }

  // security_alerts_threshold - computed: false, optional: false, required: true
  private _securityAlertsThreshold?: string; 
  public get securityAlertsThreshold() {
    return this.getStringAttribute('security_alerts_threshold');
  }
  public set securityAlertsThreshold(value: string) {
    this._securityAlertsThreshold = value;
  }
  // Temporarily expose input value. Use with caution.
  public get securityAlertsThresholdInput() {
    return this._securityAlertsThreshold;
  }

  // tool - computed: false, optional: false, required: true
  private _tool?: string; 
  public get tool() {
    return this.getStringAttribute('tool');
  }
  public set tool(value: string) {
    this._tool = value;
  }
  // Temporarily expose input value. Use with caution.
  public get toolInput() {
    return this._tool;
  }
}

export class OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolList extends cdktf.ComplexList {
  public internalValue? : OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningTool[] | cdktf.IResolvable

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
  public get(index: number): OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolOutputReference {
    return new OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OrganizationRulesetRulesRequiredCodeScanning {
  /**
  * required_code_scanning_tool block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/resources/organization_ruleset#required_code_scanning_tool OrganizationRuleset#required_code_scanning_tool}
  */
  readonly requiredCodeScanningTool: OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningTool[] | cdktf.IResolvable;
}

export function organizationRulesetRulesRequiredCodeScanningToTerraform(struct?: OrganizationRulesetRulesRequiredCodeScanningOutputReference | OrganizationRulesetRulesRequiredCodeScanning): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    required_code_scanning_tool: cdktf.listMapper(organizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolToTerraform, true)(struct!.requiredCodeScanningTool),
  }
}


export function organizationRulesetRulesRequiredCodeScanningToHclTerraform(struct?: OrganizationRulesetRulesRequiredCodeScanningOutputReference | OrganizationRulesetRulesRequiredCodeScanning): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    required_code_scanning_tool: {
      value: cdktf.listMapperHcl(organizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolToHclTerraform, true)(struct!.requiredCodeScanningTool),
      isBlock: true,
      type: "set",
      storageClassType: "OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrganizationRulesetRulesRequiredCodeScanningOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OrganizationRulesetRulesRequiredCodeScanning | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._requiredCodeScanningTool?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.requiredCodeScanningTool = this._requiredCodeScanningTool?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrganizationRulesetRulesRequiredCodeScanning | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._requiredCodeScanningTool.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._requiredCodeScanningTool.internalValue = value.requiredCodeScanningTool;
    }
  }

  // required_code_scanning_tool - computed: false, optional: false, required: true
  private _requiredCodeScanningTool = new OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolList(this, "required_code_scanning_tool", true);
  public get requiredCodeScanningTool() {
    return this._requiredCodeScanningTool;
  }
  public putRequiredCodeScanningTool(value: OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningTool[] | cdktf.IResolvable) {
    this._requiredCodeScanningTool.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredCodeScanningToolInput() {
    return this._requiredCodeScanningTool.internalValue;
  }
}
export interface OrganizationRulesetRulesRequiredStatusChecksRequiredCheck {
  /**
  * The status check context name that must be present on the commit.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/resources/organization_ruleset#context OrganizationRuleset#context}
  */
  readonly context: string;
  /**
  * The optional integration ID that this status check must originate from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/resources/organization_ruleset#integration_id OrganizationRuleset#integration_id}
  */
  readonly integrationId?: number;
}

export function organizationRulesetRulesRequiredStatusChecksRequiredCheckToTerraform(struct?: OrganizationRulesetRulesRequiredStatusChecksRequiredCheck | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    context: cdktf.stringToTerraform(struct!.context),
    integration_id: cdktf.numberToTerraform(struct!.integrationId),
  }
}


export function organizationRulesetRulesRequiredStatusChecksRequiredCheckToHclTerraform(struct?: OrganizationRulesetRulesRequiredStatusChecksRequiredCheck | cdktf.IResolvable): any {
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

export class OrganizationRulesetRulesRequiredStatusChecksRequiredCheckOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OrganizationRulesetRulesRequiredStatusChecksRequiredCheck | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OrganizationRulesetRulesRequiredStatusChecksRequiredCheck | cdktf.IResolvable | undefined) {
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

export class OrganizationRulesetRulesRequiredStatusChecksRequiredCheckList extends cdktf.ComplexList {
  public internalValue? : OrganizationRulesetRulesRequiredStatusChecksRequiredCheck[] | cdktf.IResolvable

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
  public get(index: number): OrganizationRulesetRulesRequiredStatusChecksRequiredCheckOutputReference {
    return new OrganizationRulesetRulesRequiredStatusChecksRequiredCheckOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OrganizationRulesetRulesRequiredStatusChecks {
  /**
  * Allow repositories and branches to be created if a check would otherwise prohibit it.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/resources/organization_ruleset#do_not_enforce_on_create OrganizationRuleset#do_not_enforce_on_create}
  */
  readonly doNotEnforceOnCreate?: boolean | cdktf.IResolvable;
  /**
  * Whether pull requests targeting a matching branch must be tested with the latest code. This setting will not take effect unless at least one status check is enabled. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/resources/organization_ruleset#strict_required_status_checks_policy OrganizationRuleset#strict_required_status_checks_policy}
  */
  readonly strictRequiredStatusChecksPolicy?: boolean | cdktf.IResolvable;
  /**
  * required_check block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/resources/organization_ruleset#required_check OrganizationRuleset#required_check}
  */
  readonly requiredCheck: OrganizationRulesetRulesRequiredStatusChecksRequiredCheck[] | cdktf.IResolvable;
}

export function organizationRulesetRulesRequiredStatusChecksToTerraform(struct?: OrganizationRulesetRulesRequiredStatusChecksOutputReference | OrganizationRulesetRulesRequiredStatusChecks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    do_not_enforce_on_create: cdktf.booleanToTerraform(struct!.doNotEnforceOnCreate),
    strict_required_status_checks_policy: cdktf.booleanToTerraform(struct!.strictRequiredStatusChecksPolicy),
    required_check: cdktf.listMapper(organizationRulesetRulesRequiredStatusChecksRequiredCheckToTerraform, true)(struct!.requiredCheck),
  }
}


export function organizationRulesetRulesRequiredStatusChecksToHclTerraform(struct?: OrganizationRulesetRulesRequiredStatusChecksOutputReference | OrganizationRulesetRulesRequiredStatusChecks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    do_not_enforce_on_create: {
      value: cdktf.booleanToHclTerraform(struct!.doNotEnforceOnCreate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    strict_required_status_checks_policy: {
      value: cdktf.booleanToHclTerraform(struct!.strictRequiredStatusChecksPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    required_check: {
      value: cdktf.listMapperHcl(organizationRulesetRulesRequiredStatusChecksRequiredCheckToHclTerraform, true)(struct!.requiredCheck),
      isBlock: true,
      type: "set",
      storageClassType: "OrganizationRulesetRulesRequiredStatusChecksRequiredCheckList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrganizationRulesetRulesRequiredStatusChecksOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OrganizationRulesetRulesRequiredStatusChecks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._doNotEnforceOnCreate !== undefined) {
      hasAnyValues = true;
      internalValueResult.doNotEnforceOnCreate = this._doNotEnforceOnCreate;
    }
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

  public set internalValue(value: OrganizationRulesetRulesRequiredStatusChecks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._doNotEnforceOnCreate = undefined;
      this._strictRequiredStatusChecksPolicy = undefined;
      this._requiredCheck.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._doNotEnforceOnCreate = value.doNotEnforceOnCreate;
      this._strictRequiredStatusChecksPolicy = value.strictRequiredStatusChecksPolicy;
      this._requiredCheck.internalValue = value.requiredCheck;
    }
  }

  // do_not_enforce_on_create - computed: false, optional: true, required: false
  private _doNotEnforceOnCreate?: boolean | cdktf.IResolvable; 
  public get doNotEnforceOnCreate() {
    return this.getBooleanAttribute('do_not_enforce_on_create');
  }
  public set doNotEnforceOnCreate(value: boolean | cdktf.IResolvable) {
    this._doNotEnforceOnCreate = value;
  }
  public resetDoNotEnforceOnCreate() {
    this._doNotEnforceOnCreate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get doNotEnforceOnCreateInput() {
    return this._doNotEnforceOnCreate;
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
  private _requiredCheck = new OrganizationRulesetRulesRequiredStatusChecksRequiredCheckList(this, "required_check", true);
  public get requiredCheck() {
    return this._requiredCheck;
  }
  public putRequiredCheck(value: OrganizationRulesetRulesRequiredStatusChecksRequiredCheck[] | cdktf.IResolvable) {
    this._requiredCheck.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredCheckInput() {
    return this._requiredCheck.internalValue;
  }
}
export interface OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflow {
  /**
  * The path to the workflow YAML definition file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/resources/organization_ruleset#path OrganizationRuleset#path}
  */
  readonly path: string;
  /**
  * The ref (branch or tag) of the workflow file to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/resources/organization_ruleset#ref OrganizationRuleset#ref}
  */
  readonly ref?: string;
  /**
  * The repository in which the workflow is defined.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/resources/organization_ruleset#repository_id OrganizationRuleset#repository_id}
  */
  readonly repositoryId: number;
}

export function organizationRulesetRulesRequiredWorkflowsRequiredWorkflowToTerraform(struct?: OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflow | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    path: cdktf.stringToTerraform(struct!.path),
    ref: cdktf.stringToTerraform(struct!.ref),
    repository_id: cdktf.numberToTerraform(struct!.repositoryId),
  }
}


export function organizationRulesetRulesRequiredWorkflowsRequiredWorkflowToHclTerraform(struct?: OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflow | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ref: {
      value: cdktf.stringToHclTerraform(struct!.ref),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    repository_id: {
      value: cdktf.numberToHclTerraform(struct!.repositoryId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflow | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._ref !== undefined) {
      hasAnyValues = true;
      internalValueResult.ref = this._ref;
    }
    if (this._repositoryId !== undefined) {
      hasAnyValues = true;
      internalValueResult.repositoryId = this._repositoryId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflow | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._path = undefined;
      this._ref = undefined;
      this._repositoryId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._path = value.path;
      this._ref = value.ref;
      this._repositoryId = value.repositoryId;
    }
  }

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // ref - computed: false, optional: true, required: false
  private _ref?: string; 
  public get ref() {
    return this.getStringAttribute('ref');
  }
  public set ref(value: string) {
    this._ref = value;
  }
  public resetRef() {
    this._ref = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refInput() {
    return this._ref;
  }

  // repository_id - computed: false, optional: false, required: true
  private _repositoryId?: number; 
  public get repositoryId() {
    return this.getNumberAttribute('repository_id');
  }
  public set repositoryId(value: number) {
    this._repositoryId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryIdInput() {
    return this._repositoryId;
  }
}

export class OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowList extends cdktf.ComplexList {
  public internalValue? : OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflow[] | cdktf.IResolvable

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
  public get(index: number): OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowOutputReference {
    return new OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OrganizationRulesetRulesRequiredWorkflows {
  /**
  * Allow repositories and branches to be created if a check would otherwise prohibit it.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/resources/organization_ruleset#do_not_enforce_on_create OrganizationRuleset#do_not_enforce_on_create}
  */
  readonly doNotEnforceOnCreate?: boolean | cdktf.IResolvable;
  /**
  * required_workflow block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/resources/organization_ruleset#required_workflow OrganizationRuleset#required_workflow}
  */
  readonly requiredWorkflow: OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflow[] | cdktf.IResolvable;
}

export function organizationRulesetRulesRequiredWorkflowsToTerraform(struct?: OrganizationRulesetRulesRequiredWorkflowsOutputReference | OrganizationRulesetRulesRequiredWorkflows): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    do_not_enforce_on_create: cdktf.booleanToTerraform(struct!.doNotEnforceOnCreate),
    required_workflow: cdktf.listMapper(organizationRulesetRulesRequiredWorkflowsRequiredWorkflowToTerraform, true)(struct!.requiredWorkflow),
  }
}


export function organizationRulesetRulesRequiredWorkflowsToHclTerraform(struct?: OrganizationRulesetRulesRequiredWorkflowsOutputReference | OrganizationRulesetRulesRequiredWorkflows): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    do_not_enforce_on_create: {
      value: cdktf.booleanToHclTerraform(struct!.doNotEnforceOnCreate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    required_workflow: {
      value: cdktf.listMapperHcl(organizationRulesetRulesRequiredWorkflowsRequiredWorkflowToHclTerraform, true)(struct!.requiredWorkflow),
      isBlock: true,
      type: "set",
      storageClassType: "OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrganizationRulesetRulesRequiredWorkflowsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OrganizationRulesetRulesRequiredWorkflows | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._doNotEnforceOnCreate !== undefined) {
      hasAnyValues = true;
      internalValueResult.doNotEnforceOnCreate = this._doNotEnforceOnCreate;
    }
    if (this._requiredWorkflow?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.requiredWorkflow = this._requiredWorkflow?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrganizationRulesetRulesRequiredWorkflows | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._doNotEnforceOnCreate = undefined;
      this._requiredWorkflow.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._doNotEnforceOnCreate = value.doNotEnforceOnCreate;
      this._requiredWorkflow.internalValue = value.requiredWorkflow;
    }
  }

  // do_not_enforce_on_create - computed: false, optional: true, required: false
  private _doNotEnforceOnCreate?: boolean | cdktf.IResolvable; 
  public get doNotEnforceOnCreate() {
    return this.getBooleanAttribute('do_not_enforce_on_create');
  }
  public set doNotEnforceOnCreate(value: boolean | cdktf.IResolvable) {
    this._doNotEnforceOnCreate = value;
  }
  public resetDoNotEnforceOnCreate() {
    this._doNotEnforceOnCreate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get doNotEnforceOnCreateInput() {
    return this._doNotEnforceOnCreate;
  }

  // required_workflow - computed: false, optional: false, required: true
  private _requiredWorkflow = new OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowList(this, "required_workflow", true);
  public get requiredWorkflow() {
    return this._requiredWorkflow;
  }
  public putRequiredWorkflow(value: OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflow[] | cdktf.IResolvable) {
    this._requiredWorkflow.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredWorkflowInput() {
    return this._requiredWorkflow.internalValue;
  }
}
export interface OrganizationRulesetRulesTagNamePattern {
  /**
  * How this rule will appear to users.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/resources/organization_ruleset#name OrganizationRuleset#name}
  */
  readonly name?: string;
  /**
  * If true, the rule will fail if the pattern matches.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/resources/organization_ruleset#negate OrganizationRuleset#negate}
  */
  readonly negate?: boolean | cdktf.IResolvable;
  /**
  * The operator to use for matching. Can be one of: `starts_with`, `ends_with`, `contains`, `regex`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/resources/organization_ruleset#operator OrganizationRuleset#operator}
  */
  readonly operator: string;
  /**
  * The pattern to match with.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/resources/organization_ruleset#pattern OrganizationRuleset#pattern}
  */
  readonly pattern: string;
}

export function organizationRulesetRulesTagNamePatternToTerraform(struct?: OrganizationRulesetRulesTagNamePatternOutputReference | OrganizationRulesetRulesTagNamePattern): any {
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


export function organizationRulesetRulesTagNamePatternToHclTerraform(struct?: OrganizationRulesetRulesTagNamePatternOutputReference | OrganizationRulesetRulesTagNamePattern): any {
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

export class OrganizationRulesetRulesTagNamePatternOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OrganizationRulesetRulesTagNamePattern | undefined {
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

  public set internalValue(value: OrganizationRulesetRulesTagNamePattern | undefined) {
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
export interface OrganizationRulesetRules {
  /**
  * Only allow users with bypass permission to create matching refs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/resources/organization_ruleset#creation OrganizationRuleset#creation}
  */
  readonly creation?: boolean | cdktf.IResolvable;
  /**
  * Only allow users with bypass permissions to delete matching refs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/resources/organization_ruleset#deletion OrganizationRuleset#deletion}
  */
  readonly deletion?: boolean | cdktf.IResolvable;
  /**
  * Prevent users with push access from force pushing to branches.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/resources/organization_ruleset#non_fast_forward OrganizationRuleset#non_fast_forward}
  */
  readonly nonFastForward?: boolean | cdktf.IResolvable;
  /**
  * Prevent merge commits from being pushed to matching branches.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/resources/organization_ruleset#required_linear_history OrganizationRuleset#required_linear_history}
  */
  readonly requiredLinearHistory?: boolean | cdktf.IResolvable;
  /**
  * Commits pushed to matching branches must have verified signatures.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/resources/organization_ruleset#required_signatures OrganizationRuleset#required_signatures}
  */
  readonly requiredSignatures?: boolean | cdktf.IResolvable;
  /**
  * Only allow users with bypass permission to update matching refs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/resources/organization_ruleset#update OrganizationRuleset#update}
  */
  readonly update?: boolean | cdktf.IResolvable;
  /**
  * branch_name_pattern block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/resources/organization_ruleset#branch_name_pattern OrganizationRuleset#branch_name_pattern}
  */
  readonly branchNamePattern?: OrganizationRulesetRulesBranchNamePattern;
  /**
  * commit_author_email_pattern block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/resources/organization_ruleset#commit_author_email_pattern OrganizationRuleset#commit_author_email_pattern}
  */
  readonly commitAuthorEmailPattern?: OrganizationRulesetRulesCommitAuthorEmailPattern;
  /**
  * commit_message_pattern block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/resources/organization_ruleset#commit_message_pattern OrganizationRuleset#commit_message_pattern}
  */
  readonly commitMessagePattern?: OrganizationRulesetRulesCommitMessagePattern;
  /**
  * committer_email_pattern block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/resources/organization_ruleset#committer_email_pattern OrganizationRuleset#committer_email_pattern}
  */
  readonly committerEmailPattern?: OrganizationRulesetRulesCommitterEmailPattern;
  /**
  * file_extension_restriction block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/resources/organization_ruleset#file_extension_restriction OrganizationRuleset#file_extension_restriction}
  */
  readonly fileExtensionRestriction?: OrganizationRulesetRulesFileExtensionRestriction;
  /**
  * file_path_restriction block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/resources/organization_ruleset#file_path_restriction OrganizationRuleset#file_path_restriction}
  */
  readonly filePathRestriction?: OrganizationRulesetRulesFilePathRestriction;
  /**
  * max_file_path_length block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/resources/organization_ruleset#max_file_path_length OrganizationRuleset#max_file_path_length}
  */
  readonly maxFilePathLength?: OrganizationRulesetRulesMaxFilePathLength;
  /**
  * max_file_size block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/resources/organization_ruleset#max_file_size OrganizationRuleset#max_file_size}
  */
  readonly maxFileSize?: OrganizationRulesetRulesMaxFileSize;
  /**
  * pull_request block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/resources/organization_ruleset#pull_request OrganizationRuleset#pull_request}
  */
  readonly pullRequest?: OrganizationRulesetRulesPullRequest;
  /**
  * required_code_scanning block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/resources/organization_ruleset#required_code_scanning OrganizationRuleset#required_code_scanning}
  */
  readonly requiredCodeScanning?: OrganizationRulesetRulesRequiredCodeScanning;
  /**
  * required_status_checks block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/resources/organization_ruleset#required_status_checks OrganizationRuleset#required_status_checks}
  */
  readonly requiredStatusChecks?: OrganizationRulesetRulesRequiredStatusChecks;
  /**
  * required_workflows block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/resources/organization_ruleset#required_workflows OrganizationRuleset#required_workflows}
  */
  readonly requiredWorkflows?: OrganizationRulesetRulesRequiredWorkflows;
  /**
  * tag_name_pattern block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/resources/organization_ruleset#tag_name_pattern OrganizationRuleset#tag_name_pattern}
  */
  readonly tagNamePattern?: OrganizationRulesetRulesTagNamePattern;
}

export function organizationRulesetRulesToTerraform(struct?: OrganizationRulesetRulesOutputReference | OrganizationRulesetRules): any {
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
    branch_name_pattern: organizationRulesetRulesBranchNamePatternToTerraform(struct!.branchNamePattern),
    commit_author_email_pattern: organizationRulesetRulesCommitAuthorEmailPatternToTerraform(struct!.commitAuthorEmailPattern),
    commit_message_pattern: organizationRulesetRulesCommitMessagePatternToTerraform(struct!.commitMessagePattern),
    committer_email_pattern: organizationRulesetRulesCommitterEmailPatternToTerraform(struct!.committerEmailPattern),
    file_extension_restriction: organizationRulesetRulesFileExtensionRestrictionToTerraform(struct!.fileExtensionRestriction),
    file_path_restriction: organizationRulesetRulesFilePathRestrictionToTerraform(struct!.filePathRestriction),
    max_file_path_length: organizationRulesetRulesMaxFilePathLengthToTerraform(struct!.maxFilePathLength),
    max_file_size: organizationRulesetRulesMaxFileSizeToTerraform(struct!.maxFileSize),
    pull_request: organizationRulesetRulesPullRequestToTerraform(struct!.pullRequest),
    required_code_scanning: organizationRulesetRulesRequiredCodeScanningToTerraform(struct!.requiredCodeScanning),
    required_status_checks: organizationRulesetRulesRequiredStatusChecksToTerraform(struct!.requiredStatusChecks),
    required_workflows: organizationRulesetRulesRequiredWorkflowsToTerraform(struct!.requiredWorkflows),
    tag_name_pattern: organizationRulesetRulesTagNamePatternToTerraform(struct!.tagNamePattern),
  }
}


export function organizationRulesetRulesToHclTerraform(struct?: OrganizationRulesetRulesOutputReference | OrganizationRulesetRules): any {
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
    branch_name_pattern: {
      value: organizationRulesetRulesBranchNamePatternToHclTerraform(struct!.branchNamePattern),
      isBlock: true,
      type: "list",
      storageClassType: "OrganizationRulesetRulesBranchNamePatternList",
    },
    commit_author_email_pattern: {
      value: organizationRulesetRulesCommitAuthorEmailPatternToHclTerraform(struct!.commitAuthorEmailPattern),
      isBlock: true,
      type: "list",
      storageClassType: "OrganizationRulesetRulesCommitAuthorEmailPatternList",
    },
    commit_message_pattern: {
      value: organizationRulesetRulesCommitMessagePatternToHclTerraform(struct!.commitMessagePattern),
      isBlock: true,
      type: "list",
      storageClassType: "OrganizationRulesetRulesCommitMessagePatternList",
    },
    committer_email_pattern: {
      value: organizationRulesetRulesCommitterEmailPatternToHclTerraform(struct!.committerEmailPattern),
      isBlock: true,
      type: "list",
      storageClassType: "OrganizationRulesetRulesCommitterEmailPatternList",
    },
    file_extension_restriction: {
      value: organizationRulesetRulesFileExtensionRestrictionToHclTerraform(struct!.fileExtensionRestriction),
      isBlock: true,
      type: "list",
      storageClassType: "OrganizationRulesetRulesFileExtensionRestrictionList",
    },
    file_path_restriction: {
      value: organizationRulesetRulesFilePathRestrictionToHclTerraform(struct!.filePathRestriction),
      isBlock: true,
      type: "list",
      storageClassType: "OrganizationRulesetRulesFilePathRestrictionList",
    },
    max_file_path_length: {
      value: organizationRulesetRulesMaxFilePathLengthToHclTerraform(struct!.maxFilePathLength),
      isBlock: true,
      type: "list",
      storageClassType: "OrganizationRulesetRulesMaxFilePathLengthList",
    },
    max_file_size: {
      value: organizationRulesetRulesMaxFileSizeToHclTerraform(struct!.maxFileSize),
      isBlock: true,
      type: "list",
      storageClassType: "OrganizationRulesetRulesMaxFileSizeList",
    },
    pull_request: {
      value: organizationRulesetRulesPullRequestToHclTerraform(struct!.pullRequest),
      isBlock: true,
      type: "list",
      storageClassType: "OrganizationRulesetRulesPullRequestList",
    },
    required_code_scanning: {
      value: organizationRulesetRulesRequiredCodeScanningToHclTerraform(struct!.requiredCodeScanning),
      isBlock: true,
      type: "list",
      storageClassType: "OrganizationRulesetRulesRequiredCodeScanningList",
    },
    required_status_checks: {
      value: organizationRulesetRulesRequiredStatusChecksToHclTerraform(struct!.requiredStatusChecks),
      isBlock: true,
      type: "list",
      storageClassType: "OrganizationRulesetRulesRequiredStatusChecksList",
    },
    required_workflows: {
      value: organizationRulesetRulesRequiredWorkflowsToHclTerraform(struct!.requiredWorkflows),
      isBlock: true,
      type: "list",
      storageClassType: "OrganizationRulesetRulesRequiredWorkflowsList",
    },
    tag_name_pattern: {
      value: organizationRulesetRulesTagNamePatternToHclTerraform(struct!.tagNamePattern),
      isBlock: true,
      type: "list",
      storageClassType: "OrganizationRulesetRulesTagNamePatternList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrganizationRulesetRulesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OrganizationRulesetRules | undefined {
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
    if (this._fileExtensionRestriction?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileExtensionRestriction = this._fileExtensionRestriction?.internalValue;
    }
    if (this._filePathRestriction?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filePathRestriction = this._filePathRestriction?.internalValue;
    }
    if (this._maxFilePathLength?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxFilePathLength = this._maxFilePathLength?.internalValue;
    }
    if (this._maxFileSize?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxFileSize = this._maxFileSize?.internalValue;
    }
    if (this._pullRequest?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pullRequest = this._pullRequest?.internalValue;
    }
    if (this._requiredCodeScanning?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.requiredCodeScanning = this._requiredCodeScanning?.internalValue;
    }
    if (this._requiredStatusChecks?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.requiredStatusChecks = this._requiredStatusChecks?.internalValue;
    }
    if (this._requiredWorkflows?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.requiredWorkflows = this._requiredWorkflows?.internalValue;
    }
    if (this._tagNamePattern?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagNamePattern = this._tagNamePattern?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrganizationRulesetRules | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._creation = undefined;
      this._deletion = undefined;
      this._nonFastForward = undefined;
      this._requiredLinearHistory = undefined;
      this._requiredSignatures = undefined;
      this._update = undefined;
      this._branchNamePattern.internalValue = undefined;
      this._commitAuthorEmailPattern.internalValue = undefined;
      this._commitMessagePattern.internalValue = undefined;
      this._committerEmailPattern.internalValue = undefined;
      this._fileExtensionRestriction.internalValue = undefined;
      this._filePathRestriction.internalValue = undefined;
      this._maxFilePathLength.internalValue = undefined;
      this._maxFileSize.internalValue = undefined;
      this._pullRequest.internalValue = undefined;
      this._requiredCodeScanning.internalValue = undefined;
      this._requiredStatusChecks.internalValue = undefined;
      this._requiredWorkflows.internalValue = undefined;
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
      this._branchNamePattern.internalValue = value.branchNamePattern;
      this._commitAuthorEmailPattern.internalValue = value.commitAuthorEmailPattern;
      this._commitMessagePattern.internalValue = value.commitMessagePattern;
      this._committerEmailPattern.internalValue = value.committerEmailPattern;
      this._fileExtensionRestriction.internalValue = value.fileExtensionRestriction;
      this._filePathRestriction.internalValue = value.filePathRestriction;
      this._maxFilePathLength.internalValue = value.maxFilePathLength;
      this._maxFileSize.internalValue = value.maxFileSize;
      this._pullRequest.internalValue = value.pullRequest;
      this._requiredCodeScanning.internalValue = value.requiredCodeScanning;
      this._requiredStatusChecks.internalValue = value.requiredStatusChecks;
      this._requiredWorkflows.internalValue = value.requiredWorkflows;
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

  // branch_name_pattern - computed: false, optional: true, required: false
  private _branchNamePattern = new OrganizationRulesetRulesBranchNamePatternOutputReference(this, "branch_name_pattern");
  public get branchNamePattern() {
    return this._branchNamePattern;
  }
  public putBranchNamePattern(value: OrganizationRulesetRulesBranchNamePattern) {
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
  private _commitAuthorEmailPattern = new OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference(this, "commit_author_email_pattern");
  public get commitAuthorEmailPattern() {
    return this._commitAuthorEmailPattern;
  }
  public putCommitAuthorEmailPattern(value: OrganizationRulesetRulesCommitAuthorEmailPattern) {
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
  private _commitMessagePattern = new OrganizationRulesetRulesCommitMessagePatternOutputReference(this, "commit_message_pattern");
  public get commitMessagePattern() {
    return this._commitMessagePattern;
  }
  public putCommitMessagePattern(value: OrganizationRulesetRulesCommitMessagePattern) {
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
  private _committerEmailPattern = new OrganizationRulesetRulesCommitterEmailPatternOutputReference(this, "committer_email_pattern");
  public get committerEmailPattern() {
    return this._committerEmailPattern;
  }
  public putCommitterEmailPattern(value: OrganizationRulesetRulesCommitterEmailPattern) {
    this._committerEmailPattern.internalValue = value;
  }
  public resetCommitterEmailPattern() {
    this._committerEmailPattern.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get committerEmailPatternInput() {
    return this._committerEmailPattern.internalValue;
  }

  // file_extension_restriction - computed: false, optional: true, required: false
  private _fileExtensionRestriction = new OrganizationRulesetRulesFileExtensionRestrictionOutputReference(this, "file_extension_restriction");
  public get fileExtensionRestriction() {
    return this._fileExtensionRestriction;
  }
  public putFileExtensionRestriction(value: OrganizationRulesetRulesFileExtensionRestriction) {
    this._fileExtensionRestriction.internalValue = value;
  }
  public resetFileExtensionRestriction() {
    this._fileExtensionRestriction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileExtensionRestrictionInput() {
    return this._fileExtensionRestriction.internalValue;
  }

  // file_path_restriction - computed: false, optional: true, required: false
  private _filePathRestriction = new OrganizationRulesetRulesFilePathRestrictionOutputReference(this, "file_path_restriction");
  public get filePathRestriction() {
    return this._filePathRestriction;
  }
  public putFilePathRestriction(value: OrganizationRulesetRulesFilePathRestriction) {
    this._filePathRestriction.internalValue = value;
  }
  public resetFilePathRestriction() {
    this._filePathRestriction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filePathRestrictionInput() {
    return this._filePathRestriction.internalValue;
  }

  // max_file_path_length - computed: false, optional: true, required: false
  private _maxFilePathLength = new OrganizationRulesetRulesMaxFilePathLengthOutputReference(this, "max_file_path_length");
  public get maxFilePathLength() {
    return this._maxFilePathLength;
  }
  public putMaxFilePathLength(value: OrganizationRulesetRulesMaxFilePathLength) {
    this._maxFilePathLength.internalValue = value;
  }
  public resetMaxFilePathLength() {
    this._maxFilePathLength.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxFilePathLengthInput() {
    return this._maxFilePathLength.internalValue;
  }

  // max_file_size - computed: false, optional: true, required: false
  private _maxFileSize = new OrganizationRulesetRulesMaxFileSizeOutputReference(this, "max_file_size");
  public get maxFileSize() {
    return this._maxFileSize;
  }
  public putMaxFileSize(value: OrganizationRulesetRulesMaxFileSize) {
    this._maxFileSize.internalValue = value;
  }
  public resetMaxFileSize() {
    this._maxFileSize.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxFileSizeInput() {
    return this._maxFileSize.internalValue;
  }

  // pull_request - computed: false, optional: true, required: false
  private _pullRequest = new OrganizationRulesetRulesPullRequestOutputReference(this, "pull_request");
  public get pullRequest() {
    return this._pullRequest;
  }
  public putPullRequest(value: OrganizationRulesetRulesPullRequest) {
    this._pullRequest.internalValue = value;
  }
  public resetPullRequest() {
    this._pullRequest.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pullRequestInput() {
    return this._pullRequest.internalValue;
  }

  // required_code_scanning - computed: false, optional: true, required: false
  private _requiredCodeScanning = new OrganizationRulesetRulesRequiredCodeScanningOutputReference(this, "required_code_scanning");
  public get requiredCodeScanning() {
    return this._requiredCodeScanning;
  }
  public putRequiredCodeScanning(value: OrganizationRulesetRulesRequiredCodeScanning) {
    this._requiredCodeScanning.internalValue = value;
  }
  public resetRequiredCodeScanning() {
    this._requiredCodeScanning.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredCodeScanningInput() {
    return this._requiredCodeScanning.internalValue;
  }

  // required_status_checks - computed: false, optional: true, required: false
  private _requiredStatusChecks = new OrganizationRulesetRulesRequiredStatusChecksOutputReference(this, "required_status_checks");
  public get requiredStatusChecks() {
    return this._requiredStatusChecks;
  }
  public putRequiredStatusChecks(value: OrganizationRulesetRulesRequiredStatusChecks) {
    this._requiredStatusChecks.internalValue = value;
  }
  public resetRequiredStatusChecks() {
    this._requiredStatusChecks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredStatusChecksInput() {
    return this._requiredStatusChecks.internalValue;
  }

  // required_workflows - computed: false, optional: true, required: false
  private _requiredWorkflows = new OrganizationRulesetRulesRequiredWorkflowsOutputReference(this, "required_workflows");
  public get requiredWorkflows() {
    return this._requiredWorkflows;
  }
  public putRequiredWorkflows(value: OrganizationRulesetRulesRequiredWorkflows) {
    this._requiredWorkflows.internalValue = value;
  }
  public resetRequiredWorkflows() {
    this._requiredWorkflows.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredWorkflowsInput() {
    return this._requiredWorkflows.internalValue;
  }

  // tag_name_pattern - computed: false, optional: true, required: false
  private _tagNamePattern = new OrganizationRulesetRulesTagNamePatternOutputReference(this, "tag_name_pattern");
  public get tagNamePattern() {
    return this._tagNamePattern;
  }
  public putTagNamePattern(value: OrganizationRulesetRulesTagNamePattern) {
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
* Represents a {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/resources/organization_ruleset github_organization_ruleset}
*/
export class OrganizationRuleset extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "github_organization_ruleset";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OrganizationRuleset resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OrganizationRuleset to import
  * @param importFromId The id of the existing OrganizationRuleset that should be imported. Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/resources/organization_ruleset#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OrganizationRuleset to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "github_organization_ruleset", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/resources/organization_ruleset github_organization_ruleset} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OrganizationRulesetConfig
  */
  public constructor(scope: Construct, id: string, config: OrganizationRulesetConfig) {
    super(scope, id, {
      terraformResourceType: 'github_organization_ruleset',
      terraformGeneratorMetadata: {
        providerName: 'github',
        providerVersion: '6.9.0',
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
  private _bypassActors = new OrganizationRulesetBypassActorsList(this, "bypass_actors", false);
  public get bypassActors() {
    return this._bypassActors;
  }
  public putBypassActors(value: OrganizationRulesetBypassActors[] | cdktf.IResolvable) {
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
  private _conditions = new OrganizationRulesetConditionsOutputReference(this, "conditions");
  public get conditions() {
    return this._conditions;
  }
  public putConditions(value: OrganizationRulesetConditions) {
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
  private _rules = new OrganizationRulesetRulesOutputReference(this, "rules");
  public get rules() {
    return this._rules;
  }
  public putRules(value: OrganizationRulesetRules) {
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
      target: cdktf.stringToTerraform(this._target),
      bypass_actors: cdktf.listMapper(organizationRulesetBypassActorsToTerraform, true)(this._bypassActors.internalValue),
      conditions: organizationRulesetConditionsToTerraform(this._conditions.internalValue),
      rules: organizationRulesetRulesToTerraform(this._rules.internalValue),
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
      target: {
        value: cdktf.stringToHclTerraform(this._target),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bypass_actors: {
        value: cdktf.listMapperHcl(organizationRulesetBypassActorsToHclTerraform, true)(this._bypassActors.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OrganizationRulesetBypassActorsList",
      },
      conditions: {
        value: organizationRulesetConditionsToHclTerraform(this._conditions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OrganizationRulesetConditionsList",
      },
      rules: {
        value: organizationRulesetRulesToHclTerraform(this._rules.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OrganizationRulesetRulesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
