// https://registry.terraform.io/providers/integrations/github/5.40.0/docs/data-sources/organization_teams
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataGithubOrganizationTeamsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.40.0/docs/data-sources/organization_teams#id DataGithubOrganizationTeams#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.40.0/docs/data-sources/organization_teams#results_per_page DataGithubOrganizationTeams#results_per_page}
  */
  readonly resultsPerPage?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.40.0/docs/data-sources/organization_teams#root_teams_only DataGithubOrganizationTeams#root_teams_only}
  */
  readonly rootTeamsOnly?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.40.0/docs/data-sources/organization_teams#summary_only DataGithubOrganizationTeams#summary_only}
  */
  readonly summaryOnly?: boolean | cdktf.IResolvable;
}
export interface DataGithubOrganizationTeamsTeams {
}

export function dataGithubOrganizationTeamsTeamsToTerraform(struct?: DataGithubOrganizationTeamsTeams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataGithubOrganizationTeamsTeamsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataGithubOrganizationTeamsTeams | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGithubOrganizationTeamsTeams | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // members - computed: true, optional: false, required: false
  public get members() {
    return this.getListAttribute('members');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // node_id - computed: true, optional: false, required: false
  public get nodeId() {
    return this.getStringAttribute('node_id');
  }

  // parent - computed: true, optional: false, required: false
  private _parent = new cdktf.StringMap(this, "parent");
  public get parent() {
    return this._parent;
  }

  // privacy - computed: true, optional: false, required: false
  public get privacy() {
    return this.getStringAttribute('privacy');
  }

  // repositories - computed: true, optional: false, required: false
  public get repositories() {
    return this.getListAttribute('repositories');
  }

  // slug - computed: true, optional: false, required: false
  public get slug() {
    return this.getStringAttribute('slug');
  }
}

export class DataGithubOrganizationTeamsTeamsList extends cdktf.ComplexList {

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
  public get(index: number): DataGithubOrganizationTeamsTeamsOutputReference {
    return new DataGithubOrganizationTeamsTeamsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/5.40.0/docs/data-sources/organization_teams github_organization_teams}
*/
export class DataGithubOrganizationTeams extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "github_organization_teams";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataGithubOrganizationTeams resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataGithubOrganizationTeams to import
  * @param importFromId The id of the existing DataGithubOrganizationTeams that should be imported. Refer to the {@link https://registry.terraform.io/providers/integrations/github/5.40.0/docs/data-sources/organization_teams#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataGithubOrganizationTeams to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "github_organization_teams", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/integrations/github/5.40.0/docs/data-sources/organization_teams github_organization_teams} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataGithubOrganizationTeamsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataGithubOrganizationTeamsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'github_organization_teams',
      terraformGeneratorMetadata: {
        providerName: 'github',
        providerVersion: '5.40.0',
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
    this._id = config.id;
    this._resultsPerPage = config.resultsPerPage;
    this._rootTeamsOnly = config.rootTeamsOnly;
    this._summaryOnly = config.summaryOnly;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // results_per_page - computed: false, optional: true, required: false
  private _resultsPerPage?: number; 
  public get resultsPerPage() {
    return this.getNumberAttribute('results_per_page');
  }
  public set resultsPerPage(value: number) {
    this._resultsPerPage = value;
  }
  public resetResultsPerPage() {
    this._resultsPerPage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resultsPerPageInput() {
    return this._resultsPerPage;
  }

  // root_teams_only - computed: false, optional: true, required: false
  private _rootTeamsOnly?: boolean | cdktf.IResolvable; 
  public get rootTeamsOnly() {
    return this.getBooleanAttribute('root_teams_only');
  }
  public set rootTeamsOnly(value: boolean | cdktf.IResolvable) {
    this._rootTeamsOnly = value;
  }
  public resetRootTeamsOnly() {
    this._rootTeamsOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rootTeamsOnlyInput() {
    return this._rootTeamsOnly;
  }

  // summary_only - computed: false, optional: true, required: false
  private _summaryOnly?: boolean | cdktf.IResolvable; 
  public get summaryOnly() {
    return this.getBooleanAttribute('summary_only');
  }
  public set summaryOnly(value: boolean | cdktf.IResolvable) {
    this._summaryOnly = value;
  }
  public resetSummaryOnly() {
    this._summaryOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get summaryOnlyInput() {
    return this._summaryOnly;
  }

  // teams - computed: true, optional: false, required: false
  private _teams = new DataGithubOrganizationTeamsTeamsList(this, "teams", false);
  public get teams() {
    return this._teams;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      results_per_page: cdktf.numberToTerraform(this._resultsPerPage),
      root_teams_only: cdktf.booleanToTerraform(this._rootTeamsOnly),
      summary_only: cdktf.booleanToTerraform(this._summaryOnly),
    };
  }
}
