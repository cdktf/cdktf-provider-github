# `dataGithubIpRanges` Submodule <a name="`dataGithubIpRanges` Submodule" id="@cdktf/provider-github.dataGithubIpRanges"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGithubIpRanges <a name="DataGithubIpRanges" id="@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges"></a>

Represents a {@link https://www.terraform.io/docs/providers/github/d/ip_ranges github_ip_ranges}.

#### Initializers <a name="Initializers" id="@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-github-go/github/datagithubipranges"

datagithubipranges.NewDataGithubIpRanges(scope Construct, id *string, config DataGithubIpRangesConfig) DataGithubIpRanges
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRangesConfig">DataGithubIpRangesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRangesConfig">DataGithubIpRangesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-github-go/github/datagithubipranges"

datagithubipranges.DataGithubIpRanges_IsConstruct(x interface{}) *bool
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-github-go/github/datagithubipranges"

datagithubipranges.DataGithubIpRanges_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-github-go/github/datagithubipranges"

datagithubipranges.DataGithubIpRanges_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.actions">Actions</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.actionsIpv4">ActionsIpv4</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.actionsIpv6">ActionsIpv6</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.api">Api</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.apiIpv4">ApiIpv4</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.apiIpv6">ApiIpv6</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.dependabot">Dependabot</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.dependabotIpv4">DependabotIpv4</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.dependabotIpv6">DependabotIpv6</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.git">Git</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.gitIpv4">GitIpv4</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.gitIpv6">GitIpv6</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.hooks">Hooks</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.hooksIpv4">HooksIpv4</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.hooksIpv6">HooksIpv6</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.importer">Importer</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.importerIpv4">ImporterIpv4</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.importerIpv6">ImporterIpv6</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.pages">Pages</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.pagesIpv4">PagesIpv4</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.pagesIpv6">PagesIpv6</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.web">Web</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.webIpv4">WebIpv4</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.webIpv6">WebIpv6</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Actions`<sup>Required</sup> <a name="Actions" id="@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.actions"></a>

```go
func Actions() *[]*string
```

- *Type:* *[]*string

---

##### `ActionsIpv4`<sup>Required</sup> <a name="ActionsIpv4" id="@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.actionsIpv4"></a>

```go
func ActionsIpv4() *[]*string
```

- *Type:* *[]*string

---

##### `ActionsIpv6`<sup>Required</sup> <a name="ActionsIpv6" id="@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.actionsIpv6"></a>

```go
func ActionsIpv6() *[]*string
```

- *Type:* *[]*string

---

##### `Api`<sup>Required</sup> <a name="Api" id="@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.api"></a>

```go
func Api() *[]*string
```

- *Type:* *[]*string

---

##### `ApiIpv4`<sup>Required</sup> <a name="ApiIpv4" id="@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.apiIpv4"></a>

```go
func ApiIpv4() *[]*string
```

- *Type:* *[]*string

---

##### `ApiIpv6`<sup>Required</sup> <a name="ApiIpv6" id="@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.apiIpv6"></a>

```go
func ApiIpv6() *[]*string
```

- *Type:* *[]*string

---

##### `Dependabot`<sup>Required</sup> <a name="Dependabot" id="@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.dependabot"></a>

```go
func Dependabot() *[]*string
```

- *Type:* *[]*string

---

##### `DependabotIpv4`<sup>Required</sup> <a name="DependabotIpv4" id="@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.dependabotIpv4"></a>

```go
func DependabotIpv4() *[]*string
```

- *Type:* *[]*string

---

##### `DependabotIpv6`<sup>Required</sup> <a name="DependabotIpv6" id="@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.dependabotIpv6"></a>

```go
func DependabotIpv6() *[]*string
```

- *Type:* *[]*string

---

##### `Git`<sup>Required</sup> <a name="Git" id="@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.git"></a>

```go
func Git() *[]*string
```

- *Type:* *[]*string

---

##### `GitIpv4`<sup>Required</sup> <a name="GitIpv4" id="@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.gitIpv4"></a>

```go
func GitIpv4() *[]*string
```

- *Type:* *[]*string

---

##### `GitIpv6`<sup>Required</sup> <a name="GitIpv6" id="@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.gitIpv6"></a>

```go
func GitIpv6() *[]*string
```

- *Type:* *[]*string

---

##### `Hooks`<sup>Required</sup> <a name="Hooks" id="@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.hooks"></a>

```go
func Hooks() *[]*string
```

- *Type:* *[]*string

---

##### `HooksIpv4`<sup>Required</sup> <a name="HooksIpv4" id="@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.hooksIpv4"></a>

```go
func HooksIpv4() *[]*string
```

- *Type:* *[]*string

---

##### `HooksIpv6`<sup>Required</sup> <a name="HooksIpv6" id="@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.hooksIpv6"></a>

```go
func HooksIpv6() *[]*string
```

- *Type:* *[]*string

---

##### `Importer`<sup>Required</sup> <a name="Importer" id="@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.importer"></a>

```go
func Importer() *[]*string
```

- *Type:* *[]*string

---

##### `ImporterIpv4`<sup>Required</sup> <a name="ImporterIpv4" id="@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.importerIpv4"></a>

```go
func ImporterIpv4() *[]*string
```

- *Type:* *[]*string

---

##### `ImporterIpv6`<sup>Required</sup> <a name="ImporterIpv6" id="@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.importerIpv6"></a>

```go
func ImporterIpv6() *[]*string
```

- *Type:* *[]*string

---

##### `Pages`<sup>Required</sup> <a name="Pages" id="@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.pages"></a>

```go
func Pages() *[]*string
```

- *Type:* *[]*string

---

##### `PagesIpv4`<sup>Required</sup> <a name="PagesIpv4" id="@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.pagesIpv4"></a>

```go
func PagesIpv4() *[]*string
```

- *Type:* *[]*string

---

##### `PagesIpv6`<sup>Required</sup> <a name="PagesIpv6" id="@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.pagesIpv6"></a>

```go
func PagesIpv6() *[]*string
```

- *Type:* *[]*string

---

##### `Web`<sup>Required</sup> <a name="Web" id="@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.web"></a>

```go
func Web() *[]*string
```

- *Type:* *[]*string

---

##### `WebIpv4`<sup>Required</sup> <a name="WebIpv4" id="@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.webIpv4"></a>

```go
func WebIpv4() *[]*string
```

- *Type:* *[]*string

---

##### `WebIpv6`<sup>Required</sup> <a name="WebIpv6" id="@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.webIpv6"></a>

```go
func WebIpv6() *[]*string
```

- *Type:* *[]*string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGithubIpRangesConfig <a name="DataGithubIpRangesConfig" id="@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRangesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRangesConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-github-go/github/datagithubipranges"

&datagithubipranges.DataGithubIpRangesConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRangesConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRangesConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRangesConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRangesConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRangesConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRangesConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRangesConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRangesConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/d/ip_ranges#id DataGithubIpRanges#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRangesConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRangesConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRangesConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRangesConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRangesConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRangesConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRangesConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRangesConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/d/ip_ranges#id DataGithubIpRanges#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



