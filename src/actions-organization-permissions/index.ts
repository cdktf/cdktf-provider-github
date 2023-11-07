// https://registry.terraform.io/providers/integrations/github/5.42.0/docs/resources/actions_organization_permissions
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ActionsOrganizationPermissionsConfig extends cdktf.TerraformMetaArguments {
  /**
  * The permissions policy that controls the actions that are allowed to run. Can be one of: 'all', 'local_only', or 'selected'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.42.0/docs/resources/actions_organization_permissions#allowed_actions ActionsOrganizationPermissions#allowed_actions}
  */
  readonly allowedActions?: string;
  /**
  * The policy that controls the repositories in the organization that are allowed to run GitHub Actions. Can be one of: 'all', 'none', or 'selected'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.42.0/docs/resources/actions_organization_permissions#enabled_repositories ActionsOrganizationPermissions#enabled_repositories}
  */
  readonly enabledRepositories: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.42.0/docs/resources/actions_organization_permissions#id ActionsOrganizationPermissions#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * allowed_actions_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.42.0/docs/resources/actions_organization_permissions#allowed_actions_config ActionsOrganizationPermissions#allowed_actions_config}
  */
  readonly allowedActionsConfig?: ActionsOrganizationPermissionsAllowedActionsConfig;
  /**
  * enabled_repositories_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.42.0/docs/resources/actions_organization_permissions#enabled_repositories_config ActionsOrganizationPermissions#enabled_repositories_config}
  */
  readonly enabledRepositoriesConfig?: ActionsOrganizationPermissionsEnabledRepositoriesConfig;
}
export interface ActionsOrganizationPermissionsAllowedActionsConfig {
  /**
  * Whether GitHub-owned actions are allowed in the organization.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.42.0/docs/resources/actions_organization_permissions#github_owned_allowed ActionsOrganizationPermissions#github_owned_allowed}
  */
  readonly githubOwnedAllowed: boolean | cdktf.IResolvable;
  /**
  * Specifies a list of string-matching patterns to allow specific action(s). Wildcards, tags, and SHAs are allowed. For example, 'monalisa/octocat@', 'monalisa/octocat@v2', 'monalisa/'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.42.0/docs/resources/actions_organization_permissions#patterns_allowed ActionsOrganizationPermissions#patterns_allowed}
  */
  readonly patternsAllowed?: string[];
  /**
  * Whether actions in GitHub Marketplace from verified creators are allowed. Set to 'true' to allow all GitHub Marketplace actions by verified creators.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.42.0/docs/resources/actions_organization_permissions#verified_allowed ActionsOrganizationPermissions#verified_allowed}
  */
  readonly verifiedAllowed?: boolean | cdktf.IResolvable;
}

export function actionsOrganizationPermissionsAllowedActionsConfigToTerraform(struct?: ActionsOrganizationPermissionsAllowedActionsConfigOutputReference | ActionsOrganizationPermissionsAllowedActionsConfig): any {
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

export class ActionsOrganizationPermissionsAllowedActionsConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ActionsOrganizationPermissionsAllowedActionsConfig | undefined {
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

  public set internalValue(value: ActionsOrganizationPermissionsAllowedActionsConfig | undefined) {
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
export interface ActionsOrganizationPermissionsEnabledRepositoriesConfig {
  /**
  * List of repository IDs to enable for GitHub Actions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.42.0/docs/resources/actions_organization_permissions#repository_ids ActionsOrganizationPermissions#repository_ids}
  */
  readonly repositoryIds: number[];
}

export function actionsOrganizationPermissionsEnabledRepositoriesConfigToTerraform(struct?: ActionsOrganizationPermissionsEnabledRepositoriesConfigOutputReference | ActionsOrganizationPermissionsEnabledRepositoriesConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    repository_ids: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.repositoryIds),
  }
}

export class ActionsOrganizationPermissionsEnabledRepositoriesConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ActionsOrganizationPermissionsEnabledRepositoriesConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._repositoryIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.repositoryIds = this._repositoryIds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ActionsOrganizationPermissionsEnabledRepositoriesConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._repositoryIds = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._repositoryIds = value.repositoryIds;
    }
  }

  // repository_ids - computed: false, optional: false, required: true
  private _repositoryIds?: number[]; 
  public get repositoryIds() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('repository_ids')));
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
* Represents a {@link https://registry.terraform.io/providers/integrations/github/5.42.0/docs/resources/actions_organization_permissions github_actions_organization_permissions}
*/
export class ActionsOrganizationPermissions extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "github_actions_organization_permissions";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ActionsOrganizationPermissions resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ActionsOrganizationPermissions to import
  * @param importFromId The id of the existing ActionsOrganizationPermissions that should be imported. Refer to the {@link https://registry.terraform.io/providers/integrations/github/5.42.0/docs/resources/actions_organization_permissions#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ActionsOrganizationPermissions to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "github_actions_organization_permissions", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/integrations/github/5.42.0/docs/resources/actions_organization_permissions github_actions_organization_permissions} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ActionsOrganizationPermissionsConfig
  */
  public constructor(scope: Construct, id: string, config: ActionsOrganizationPermissionsConfig) {
    super(scope, id, {
      terraformResourceType: 'github_actions_organization_permissions',
      terraformGeneratorMetadata: {
        providerName: 'github',
        providerVersion: '5.42.0',
        providerVersionConstraint: '~> 5.0'
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
    this._enabledRepositories = config.enabledRepositories;
    this._id = config.id;
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
  private _allowedActionsConfig = new ActionsOrganizationPermissionsAllowedActionsConfigOutputReference(this, "allowed_actions_config");
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
  private _enabledRepositoriesConfig = new ActionsOrganizationPermissionsEnabledRepositoriesConfigOutputReference(this, "enabled_repositories_config");
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
      id: cdktf.stringToTerraform(this._id),
      allowed_actions_config: actionsOrganizationPermissionsAllowedActionsConfigToTerraform(this._allowedActionsConfig.internalValue),
      enabled_repositories_config: actionsOrganizationPermissionsEnabledRepositoriesConfigToTerraform(this._enabledRepositoriesConfig.internalValue),
    };
  }
}
