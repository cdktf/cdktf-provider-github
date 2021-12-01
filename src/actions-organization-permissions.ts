// https://www.terraform.io/docs/providers/github/r/actions_organization_permissions.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ActionsOrganizationPermissionsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/actions_organization_permissions.html#allowed_actions ActionsOrganizationPermissions#allowed_actions}
  */
  readonly allowedActions?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/actions_organization_permissions.html#enabled_repositories ActionsOrganizationPermissions#enabled_repositories}
  */
  readonly enabledRepositories: string;
  /**
  * allowed_actions_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/actions_organization_permissions.html#allowed_actions_config ActionsOrganizationPermissions#allowed_actions_config}
  */
  readonly allowedActionsConfig?: ActionsOrganizationPermissionsAllowedActionsConfig;
  /**
  * enabled_repositories_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/actions_organization_permissions.html#enabled_repositories_config ActionsOrganizationPermissions#enabled_repositories_config}
  */
  readonly enabledRepositoriesConfig?: ActionsOrganizationPermissionsEnabledRepositoriesConfig;
}
export interface ActionsOrganizationPermissionsAllowedActionsConfig {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/actions_organization_permissions.html#github_owned_allowed ActionsOrganizationPermissions#github_owned_allowed}
  */
  readonly githubOwnedAllowed: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/actions_organization_permissions.html#patterns_allowed ActionsOrganizationPermissions#patterns_allowed}
  */
  readonly patternsAllowed?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/actions_organization_permissions.html#verified_allowed ActionsOrganizationPermissions#verified_allowed}
  */
  readonly verifiedAllowed?: boolean | cdktf.IResolvable;
}

export function actionsOrganizationPermissionsAllowedActionsConfigToTerraform(struct?: ActionsOrganizationPermissionsAllowedActionsConfigOutputReference | ActionsOrganizationPermissionsAllowedActionsConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    github_owned_allowed: cdktf.booleanToTerraform(struct!.githubOwnedAllowed),
    patterns_allowed: cdktf.listMapper(cdktf.stringToTerraform)(struct!.patternsAllowed),
    verified_allowed: cdktf.booleanToTerraform(struct!.verifiedAllowed),
  }
}

export class ActionsOrganizationPermissionsAllowedActionsConfigOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): ActionsOrganizationPermissionsAllowedActionsConfig | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._githubOwnedAllowed) {
      hasAnyValues = true;
      internalValueResult.githubOwnedAllowed = this._githubOwnedAllowed;
    }
    if (this._patternsAllowed) {
      hasAnyValues = true;
      internalValueResult.patternsAllowed = this._patternsAllowed;
    }
    if (this._verifiedAllowed) {
      hasAnyValues = true;
      internalValueResult.verifiedAllowed = this._verifiedAllowed;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ActionsOrganizationPermissionsAllowedActionsConfig | undefined) {
    if (value === undefined) {
      this._githubOwnedAllowed = undefined;
      this._patternsAllowed = undefined;
      this._verifiedAllowed = undefined;
    }
    else {
      this._githubOwnedAllowed = value.githubOwnedAllowed;
      this._patternsAllowed = value.patternsAllowed;
      this._verifiedAllowed = value.verifiedAllowed;
    }
  }

  // github_owned_allowed - computed: false, optional: false, required: true
  private _githubOwnedAllowed?: boolean | cdktf.IResolvable; 
  public get githubOwnedAllowed() {
    return this.getBooleanAttribute('github_owned_allowed') as any;
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
    return this.getListAttribute('patterns_allowed');
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
    return this.getBooleanAttribute('verified_allowed') as any;
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
export interface ActionsOrganizationPermissionsEnabledRepositoriesConfig {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/actions_organization_permissions.html#repository_ids ActionsOrganizationPermissions#repository_ids}
  */
  readonly repositoryIds: number[];
}

export function actionsOrganizationPermissionsEnabledRepositoriesConfigToTerraform(struct?: ActionsOrganizationPermissionsEnabledRepositoriesConfigOutputReference | ActionsOrganizationPermissionsEnabledRepositoriesConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    repository_ids: cdktf.listMapper(cdktf.numberToTerraform)(struct!.repositoryIds),
  }
}

export class ActionsOrganizationPermissionsEnabledRepositoriesConfigOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): ActionsOrganizationPermissionsEnabledRepositoriesConfig | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._repositoryIds) {
      hasAnyValues = true;
      internalValueResult.repositoryIds = this._repositoryIds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ActionsOrganizationPermissionsEnabledRepositoriesConfig | undefined) {
    if (value === undefined) {
      this._repositoryIds = undefined;
    }
    else {
      this._repositoryIds = value.repositoryIds;
    }
  }

  // repository_ids - computed: false, optional: false, required: true
  private _repositoryIds?: number[]; 
  public get repositoryIds() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('repository_ids') as any;
  }
  public set repositoryIds(value: number[]) {
    this._repositoryIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryIdsInput() {
    return this._repositoryIds;
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/github/r/actions_organization_permissions.html github_actions_organization_permissions}
*/
export class ActionsOrganizationPermissions extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "github_actions_organization_permissions";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/github/r/actions_organization_permissions.html github_actions_organization_permissions} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ActionsOrganizationPermissionsConfig
  */
  public constructor(scope: Construct, id: string, config: ActionsOrganizationPermissionsConfig) {
    super(scope, id, {
      terraformResourceType: 'github_actions_organization_permissions',
      terraformGeneratorMetadata: {
        providerName: 'github'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._allowedActions = config.allowedActions;
    this._enabledRepositories = config.enabledRepositories;
    this._allowedActionsConfig.internalValue = config.allowedActionsConfig;
    this._enabledRepositoriesConfig.internalValue = config.enabledRepositoriesConfig;
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

  // enabled_repositories - computed: false, optional: false, required: true
  private _enabledRepositories?: string; 
  public get enabledRepositories() {
    return this.getStringAttribute('enabled_repositories');
  }
  public set enabledRepositories(value: string) {
    this._enabledRepositories = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledRepositoriesInput() {
    return this._enabledRepositories;
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // allowed_actions_config - computed: false, optional: true, required: false
  private _allowedActionsConfig = new ActionsOrganizationPermissionsAllowedActionsConfigOutputReference(this as any, "allowed_actions_config", true);
  public get allowedActionsConfig() {
    return this._allowedActionsConfig;
  }
  public putAllowedActionsConfig(value: ActionsOrganizationPermissionsAllowedActionsConfig) {
    this._allowedActionsConfig.internalValue = value;
  }
  public resetAllowedActionsConfig() {
    this._allowedActionsConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedActionsConfigInput() {
    return this._allowedActionsConfig.internalValue;
  }

  // enabled_repositories_config - computed: false, optional: true, required: false
  private _enabledRepositoriesConfig = new ActionsOrganizationPermissionsEnabledRepositoriesConfigOutputReference(this as any, "enabled_repositories_config", true);
  public get enabledRepositoriesConfig() {
    return this._enabledRepositoriesConfig;
  }
  public putEnabledRepositoriesConfig(value: ActionsOrganizationPermissionsEnabledRepositoriesConfig) {
    this._enabledRepositoriesConfig.internalValue = value;
  }
  public resetEnabledRepositoriesConfig() {
    this._enabledRepositoriesConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledRepositoriesConfigInput() {
    return this._enabledRepositoriesConfig.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allowed_actions: cdktf.stringToTerraform(this._allowedActions),
      enabled_repositories: cdktf.stringToTerraform(this._enabledRepositories),
      allowed_actions_config: actionsOrganizationPermissionsAllowedActionsConfigToTerraform(this._allowedActionsConfig.internalValue),
      enabled_repositories_config: actionsOrganizationPermissionsEnabledRepositoriesConfigToTerraform(this._enabledRepositoriesConfig.internalValue),
    };
  }
}
