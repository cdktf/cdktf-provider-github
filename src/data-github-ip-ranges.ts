// https://www.terraform.io/docs/providers/github/d/ip_ranges
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataGithubIpRangesConfig extends cdktf.TerraformMetaArguments {
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/github/d/ip_ranges github_ip_ranges}
*/
export class DataGithubIpRanges extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "github_ip_ranges";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/github/d/ip_ranges github_ip_ranges} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataGithubIpRangesConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataGithubIpRangesConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'github_ip_ranges',
      terraformGeneratorMetadata: {
        providerName: 'github',
        providerVersion: '4.24.1',
        providerVersionConstraint: '~> 4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // actions - computed: true, optional: false, required: false
  public get actions() {
    return this.getListAttribute('actions');
  }

  // actions_ipv4 - computed: true, optional: false, required: false
  public get actionsIpv4() {
    return this.getListAttribute('actions_ipv4');
  }

  // actions_ipv6 - computed: true, optional: false, required: false
  public get actionsIpv6() {
    return this.getListAttribute('actions_ipv6');
  }

  // dependabot - computed: true, optional: false, required: false
  public get dependabot() {
    return this.getListAttribute('dependabot');
  }

  // dependabot_ipv4 - computed: true, optional: false, required: false
  public get dependabotIpv4() {
    return this.getListAttribute('dependabot_ipv4');
  }

  // dependabot_ipv6 - computed: true, optional: false, required: false
  public get dependabotIpv6() {
    return this.getListAttribute('dependabot_ipv6');
  }

  // git - computed: true, optional: false, required: false
  public get git() {
    return this.getListAttribute('git');
  }

  // git_ipv4 - computed: true, optional: false, required: false
  public get gitIpv4() {
    return this.getListAttribute('git_ipv4');
  }

  // git_ipv6 - computed: true, optional: false, required: false
  public get gitIpv6() {
    return this.getListAttribute('git_ipv6');
  }

  // hooks - computed: true, optional: false, required: false
  public get hooks() {
    return this.getListAttribute('hooks');
  }

  // hooks_ipv4 - computed: true, optional: false, required: false
  public get hooksIpv4() {
    return this.getListAttribute('hooks_ipv4');
  }

  // hooks_ipv6 - computed: true, optional: false, required: false
  public get hooksIpv6() {
    return this.getListAttribute('hooks_ipv6');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // importer - computed: true, optional: false, required: false
  public get importer() {
    return this.getListAttribute('importer');
  }

  // importer_ipv4 - computed: true, optional: false, required: false
  public get importerIpv4() {
    return this.getListAttribute('importer_ipv4');
  }

  // importer_ipv6 - computed: true, optional: false, required: false
  public get importerIpv6() {
    return this.getListAttribute('importer_ipv6');
  }

  // pages - computed: true, optional: false, required: false
  public get pages() {
    return this.getListAttribute('pages');
  }

  // pages_ipv4 - computed: true, optional: false, required: false
  public get pagesIpv4() {
    return this.getListAttribute('pages_ipv4');
  }

  // pages_ipv6 - computed: true, optional: false, required: false
  public get pagesIpv6() {
    return this.getListAttribute('pages_ipv6');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
    };
  }
}
