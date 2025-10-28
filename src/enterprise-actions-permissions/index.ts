/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/integrations/github/6.7.1/docs/resources/enterprise_actions_permissions
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EnterpriseActionsPermissionsConfig extends cdktf.TerraformMetaArguments {
  /**
  * The permissions policy that controls the actions that are allowed to run. Can be one of: 'all', 'local_only', or 'selected'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.1/docs/resources/enterprise_actions_permissions#allowed_actions EnterpriseActionsPermissions#allowed_actions}
  */
  readonly allowedActions?: string;
  /**
  * The policy that controls the organizations in the enterprise that are allowed to run GitHub Actions. Can be one of: 'all', 'none', or 'selected'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.1/docs/resources/enterprise_actions_permissions#enabled_organizations EnterpriseActionsPermissions#enabled_organizations}
  */
  readonly enabledOrganizations: string;
  /**
  * The slug of the enterprise.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.1/docs/resources/enterprise_actions_permissions#enterprise_slug EnterpriseActionsPermissions#enterprise_slug}
  */
  readonly enterpriseSlug: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.1/docs/resources/enterprise_actions_permissions#id EnterpriseActionsPermissions#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * allowed_actions_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.1/docs/resources/enterprise_actions_permissions#allowed_actions_config EnterpriseActionsPermissions#allowed_actions_config}
  */
  readonly allowedActionsConfig?: EnterpriseActionsPermissionsAllowedActionsConfig;
  /**
  * enabled_organizations_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.1/docs/resources/enterprise_actions_permissions#enabled_organizations_config EnterpriseActionsPermissions#enabled_organizations_config}
  */
  readonly enabledOrganizationsConfig?: EnterpriseActionsPermissionsEnabledOrganizationsConfig;
}
export interface EnterpriseActionsPermissionsAllowedActionsConfig {
  /**
  * Whether GitHub-owned actions are allowed in the enterprise.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.1/docs/resources/enterprise_actions_permissions#github_owned_allowed EnterpriseActionsPermissions#github_owned_allowed}
  */
  readonly githubOwnedAllowed: boolean | cdktf.IResolvable;
  /**
  * Specifies a list of string-matching patterns to allow specific action(s). Wildcards, tags, and SHAs are allowed. For example, 'monalisa/octocat@', 'monalisa/octocat@v2', 'monalisa/'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.1/docs/resources/enterprise_actions_permissions#patterns_allowed EnterpriseActionsPermissions#patterns_allowed}
  */
  readonly patternsAllowed?: string[];
  /**
  * Whether actions in GitHub Marketplace from verified creators are allowed. Set to 'true' to allow all GitHub Marketplace actions by verified creators.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.1/docs/resources/enterprise_actions_permissions#verified_allowed EnterpriseActionsPermissions#verified_allowed}
  */
  readonly verifiedAllowed?: boolean | cdktf.IResolvable;
}

export function enterpriseActionsPermissionsAllowedActionsConfigToTerraform(struct?: EnterpriseActionsPermissionsAllowedActionsConfigOutputReference | EnterpriseActionsPermissionsAllowedActionsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    github_owned_allowed: cdktf.booleanToTerraform(struct!.githubOwnedAllowed),
    patterns_allowed: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.patternsAllowed),
    verified_allowed: cdktf.booleanToTerraform(struct!.verifiedAllowed),
  }
}


export function enterpriseActionsPermissionsAllowedActionsConfigToHclTerraform(struct?: EnterpriseActionsPermissionsAllowedActionsConfigOutputReference | EnterpriseActionsPermissionsAllowedActionsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    github_owned_allowed: {
      value: cdktf.booleanToHclTerraform(struct!.githubOwnedAllowed),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    patterns_allowed: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.patternsAllowed),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    verified_allowed: {
      value: cdktf.booleanToHclTerraform(struct!.verifiedAllowed),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EnterpriseActionsPermissionsAllowedActionsConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EnterpriseActionsPermissionsAllowedActionsConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._githubOwnedAllowed !== undefined) {
      hasAnyValues = true;
      internalValueResult.githubOwnedAllowed = this._githubOwnedAllowed;
    }
    if (this._patternsAllowed !== undefined) {
      hasAnyValues = true;
      internalValueResult.patternsAllowed = this._patternsAllowed;
    }
    if (this._verifiedAllowed !== undefined) {
      hasAnyValues = true;
      internalValueResult.verifiedAllowed = this._verifiedAllowed;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EnterpriseActionsPermissionsAllowedActionsConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._githubOwnedAllowed = undefined;
      this._patternsAllowed = undefined;
      this._verifiedAllowed = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._githubOwnedAllowed = value.githubOwnedAllowed;
      this._patternsAllowed = value.patternsAllowed;
      this._verifiedAllowed = value.verifiedAllowed;
    }
  }

  // github_owned_allowed - computed: false, optional: false, required: true
  private _githubOwnedAllowed?: boolean | cdktf.IResolvable; 
  public get githubOwnedAllowed() {
    return this.getBooleanAttribute('github_owned_allowed');
  }
  public set githubOwnedAllowed(value: boolean | cdktf.IResolvable) {
    this._githubOwnedAllowed = value;
  }
  // Temporarily expose input value. Use with caution.
  public get githubOwnedAllowedInput() {
    return this._githubOwnedAllowed;
  }

  // patterns_allowed - computed: false, optional: true, required: false
  private _patternsAllowed?: string[]; 
  public get patternsAllowed() {
    return cdktf.Fn.tolist(this.getListAttribute('patterns_allowed'));
  }
  public set patternsAllowed(value: string[]) {
    this._patternsAllowed = value;
  }
  public resetPatternsAllowed() {
    this._patternsAllowed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patternsAllowedInput() {
    return this._patternsAllowed;
  }

  // verified_allowed - computed: false, optional: true, required: false
  private _verifiedAllowed?: boolean | cdktf.IResolvable; 
  public get verifiedAllowed() {
    return this.getBooleanAttribute('verified_allowed');
  }
  public set verifiedAllowed(value: boolean | cdktf.IResolvable) {
    this._verifiedAllowed = value;
  }
  public resetVerifiedAllowed() {
    this._verifiedAllowed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verifiedAllowedInput() {
    return this._verifiedAllowed;
  }
}
export interface EnterpriseActionsPermissionsEnabledOrganizationsConfig {
  /**
  * List of organization IDs to enable for GitHub Actions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.1/docs/resources/enterprise_actions_permissions#organization_ids EnterpriseActionsPermissions#organization_ids}
  */
  readonly organizationIds: number[];
}

export function enterpriseActionsPermissionsEnabledOrganizationsConfigToTerraform(struct?: EnterpriseActionsPermissionsEnabledOrganizationsConfigOutputReference | EnterpriseActionsPermissionsEnabledOrganizationsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    organization_ids: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.organizationIds),
  }
}


export function enterpriseActionsPermissionsEnabledOrganizationsConfigToHclTerraform(struct?: EnterpriseActionsPermissionsEnabledOrganizationsConfigOutputReference | EnterpriseActionsPermissionsEnabledOrganizationsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    organization_ids: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.organizationIds),
      isBlock: false,
      type: "set",
      storageClassType: "numberList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EnterpriseActionsPermissionsEnabledOrganizationsConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EnterpriseActionsPermissionsEnabledOrganizationsConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._organizationIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.organizationIds = this._organizationIds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EnterpriseActionsPermissionsEnabledOrganizationsConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._organizationIds = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._organizationIds = value.organizationIds;
    }
  }

  // organization_ids - computed: false, optional: false, required: true
  private _organizationIds?: number[]; 
  public get organizationIds() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('organization_ids')));
  }
  public set organizationIds(value: number[]) {
    this._organizationIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationIdsInput() {
    return this._organizationIds;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/6.7.1/docs/resources/enterprise_actions_permissions github_enterprise_actions_permissions}
*/
export class EnterpriseActionsPermissions extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "github_enterprise_actions_permissions";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a EnterpriseActionsPermissions resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EnterpriseActionsPermissions to import
  * @param importFromId The id of the existing EnterpriseActionsPermissions that should be imported. Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.7.1/docs/resources/enterprise_actions_permissions#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EnterpriseActionsPermissions to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "github_enterprise_actions_permissions", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/integrations/github/6.7.1/docs/resources/enterprise_actions_permissions github_enterprise_actions_permissions} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EnterpriseActionsPermissionsConfig
  */
  public constructor(scope: Construct, id: string, config: EnterpriseActionsPermissionsConfig) {
    super(scope, id, {
      terraformResourceType: 'github_enterprise_actions_permissions',
      terraformGeneratorMetadata: {
        providerName: 'github',
        providerVersion: '6.7.1',
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
    this._allowedActions = config.allowedActions;
    this._enabledOrganizations = config.enabledOrganizations;
    this._enterpriseSlug = config.enterpriseSlug;
    this._id = config.id;
    this._allowedActionsConfig.internalValue = config.allowedActionsConfig;
    this._enabledOrganizationsConfig.internalValue = config.enabledOrganizationsConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allowed_actions - computed: false, optional: true, required: false
  private _allowedActions?: string; 
  public get allowedActions() {
    return this.getStringAttribute('allowed_actions');
  }
  public set allowedActions(value: string) {
    this._allowedActions = value;
  }
  public resetAllowedActions() {
    this._allowedActions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedActionsInput() {
    return this._allowedActions;
  }

  // enabled_organizations - computed: false, optional: false, required: true
  private _enabledOrganizations?: string; 
  public get enabledOrganizations() {
    return this.getStringAttribute('enabled_organizations');
  }
  public set enabledOrganizations(value: string) {
    this._enabledOrganizations = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledOrganizationsInput() {
    return this._enabledOrganizations;
  }

  // enterprise_slug - computed: false, optional: false, required: true
  private _enterpriseSlug?: string; 
  public get enterpriseSlug() {
    return this.getStringAttribute('enterprise_slug');
  }
  public set enterpriseSlug(value: string) {
    this._enterpriseSlug = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enterpriseSlugInput() {
    return this._enterpriseSlug;
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

  // allowed_actions_config - computed: false, optional: true, required: false
  private _allowedActionsConfig = new EnterpriseActionsPermissionsAllowedActionsConfigOutputReference(this, "allowed_actions_config");
  public get allowedActionsConfig() {
    return this._allowedActionsConfig;
  }
  public putAllowedActionsConfig(value: EnterpriseActionsPermissionsAllowedActionsConfig) {
    this._allowedActionsConfig.internalValue = value;
  }
  public resetAllowedActionsConfig() {
    this._allowedActionsConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedActionsConfigInput() {
    return this._allowedActionsConfig.internalValue;
  }

  // enabled_organizations_config - computed: false, optional: true, required: false
  private _enabledOrganizationsConfig = new EnterpriseActionsPermissionsEnabledOrganizationsConfigOutputReference(this, "enabled_organizations_config");
  public get enabledOrganizationsConfig() {
    return this._enabledOrganizationsConfig;
  }
  public putEnabledOrganizationsConfig(value: EnterpriseActionsPermissionsEnabledOrganizationsConfig) {
    this._enabledOrganizationsConfig.internalValue = value;
  }
  public resetEnabledOrganizationsConfig() {
    this._enabledOrganizationsConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledOrganizationsConfigInput() {
    return this._enabledOrganizationsConfig.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allowed_actions: cdktf.stringToTerraform(this._allowedActions),
      enabled_organizations: cdktf.stringToTerraform(this._enabledOrganizations),
      enterprise_slug: cdktf.stringToTerraform(this._enterpriseSlug),
      id: cdktf.stringToTerraform(this._id),
      allowed_actions_config: enterpriseActionsPermissionsAllowedActionsConfigToTerraform(this._allowedActionsConfig.internalValue),
      enabled_organizations_config: enterpriseActionsPermissionsEnabledOrganizationsConfigToTerraform(this._enabledOrganizationsConfig.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allowed_actions: {
        value: cdktf.stringToHclTerraform(this._allowedActions),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enabled_organizations: {
        value: cdktf.stringToHclTerraform(this._enabledOrganizations),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enterprise_slug: {
        value: cdktf.stringToHclTerraform(this._enterpriseSlug),
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
      allowed_actions_config: {
        value: enterpriseActionsPermissionsAllowedActionsConfigToHclTerraform(this._allowedActionsConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EnterpriseActionsPermissionsAllowedActionsConfigList",
      },
      enabled_organizations_config: {
        value: enterpriseActionsPermissionsEnabledOrganizationsConfigToHclTerraform(this._enabledOrganizationsConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EnterpriseActionsPermissionsEnabledOrganizationsConfigList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
