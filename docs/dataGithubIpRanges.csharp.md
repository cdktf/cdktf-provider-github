# `dataGithubIpRanges` Submodule <a name="`dataGithubIpRanges` Submodule" id="@cdktf/provider-github.dataGithubIpRanges"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGithubIpRanges <a name="DataGithubIpRanges" id="@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges"></a>

Represents a {@link https://registry.terraform.io/providers/integrations/github/6.0.1/docs/data-sources/ip_ranges github_ip_ranges}.

#### Initializers <a name="Initializers" id="@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

new DataGithubIpRanges(Construct Scope, string Id, DataGithubIpRangesConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRangesConfig">DataGithubIpRangesConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRangesConfig">DataGithubIpRangesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
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

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataGithubIpRanges resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

DataGithubIpRanges.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

DataGithubIpRanges.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

DataGithubIpRanges.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

DataGithubIpRanges.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataGithubIpRanges resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGithubIpRanges to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGithubIpRanges that should be imported.

Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.0.1/docs/data-sources/ip_ranges#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataGithubIpRanges to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.actions">Actions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.actionsIpv4">ActionsIpv4</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.actionsIpv6">ActionsIpv6</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.api">Api</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.apiIpv4">ApiIpv4</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.apiIpv6">ApiIpv6</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.dependabot">Dependabot</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.dependabotIpv4">DependabotIpv4</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.dependabotIpv6">DependabotIpv6</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.git">Git</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.gitIpv4">GitIpv4</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.gitIpv6">GitIpv6</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.hooks">Hooks</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.hooksIpv4">HooksIpv4</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.hooksIpv6">HooksIpv6</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.importer">Importer</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.importerIpv4">ImporterIpv4</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.importerIpv6">ImporterIpv6</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.packages">Packages</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.packagesIpv4">PackagesIpv4</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.packagesIpv6">PackagesIpv6</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.pages">Pages</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.pagesIpv4">PagesIpv4</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.pagesIpv6">PagesIpv6</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.web">Web</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.webIpv4">WebIpv4</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.webIpv6">WebIpv6</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Actions`<sup>Required</sup> <a name="Actions" id="@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.actions"></a>

```csharp
public string[] Actions { get; }
```

- *Type:* string[]

---

##### `ActionsIpv4`<sup>Required</sup> <a name="ActionsIpv4" id="@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.actionsIpv4"></a>

```csharp
public string[] ActionsIpv4 { get; }
```

- *Type:* string[]

---

##### `ActionsIpv6`<sup>Required</sup> <a name="ActionsIpv6" id="@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.actionsIpv6"></a>

```csharp
public string[] ActionsIpv6 { get; }
```

- *Type:* string[]

---

##### `Api`<sup>Required</sup> <a name="Api" id="@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.api"></a>

```csharp
public string[] Api { get; }
```

- *Type:* string[]

---

##### `ApiIpv4`<sup>Required</sup> <a name="ApiIpv4" id="@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.apiIpv4"></a>

```csharp
public string[] ApiIpv4 { get; }
```

- *Type:* string[]

---

##### `ApiIpv6`<sup>Required</sup> <a name="ApiIpv6" id="@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.apiIpv6"></a>

```csharp
public string[] ApiIpv6 { get; }
```

- *Type:* string[]

---

##### `Dependabot`<sup>Required</sup> <a name="Dependabot" id="@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.dependabot"></a>

```csharp
public string[] Dependabot { get; }
```

- *Type:* string[]

---

##### `DependabotIpv4`<sup>Required</sup> <a name="DependabotIpv4" id="@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.dependabotIpv4"></a>

```csharp
public string[] DependabotIpv4 { get; }
```

- *Type:* string[]

---

##### `DependabotIpv6`<sup>Required</sup> <a name="DependabotIpv6" id="@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.dependabotIpv6"></a>

```csharp
public string[] DependabotIpv6 { get; }
```

- *Type:* string[]

---

##### `Git`<sup>Required</sup> <a name="Git" id="@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.git"></a>

```csharp
public string[] Git { get; }
```

- *Type:* string[]

---

##### `GitIpv4`<sup>Required</sup> <a name="GitIpv4" id="@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.gitIpv4"></a>

```csharp
public string[] GitIpv4 { get; }
```

- *Type:* string[]

---

##### `GitIpv6`<sup>Required</sup> <a name="GitIpv6" id="@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.gitIpv6"></a>

```csharp
public string[] GitIpv6 { get; }
```

- *Type:* string[]

---

##### `Hooks`<sup>Required</sup> <a name="Hooks" id="@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.hooks"></a>

```csharp
public string[] Hooks { get; }
```

- *Type:* string[]

---

##### `HooksIpv4`<sup>Required</sup> <a name="HooksIpv4" id="@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.hooksIpv4"></a>

```csharp
public string[] HooksIpv4 { get; }
```

- *Type:* string[]

---

##### `HooksIpv6`<sup>Required</sup> <a name="HooksIpv6" id="@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.hooksIpv6"></a>

```csharp
public string[] HooksIpv6 { get; }
```

- *Type:* string[]

---

##### `Importer`<sup>Required</sup> <a name="Importer" id="@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.importer"></a>

```csharp
public string[] Importer { get; }
```

- *Type:* string[]

---

##### `ImporterIpv4`<sup>Required</sup> <a name="ImporterIpv4" id="@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.importerIpv4"></a>

```csharp
public string[] ImporterIpv4 { get; }
```

- *Type:* string[]

---

##### `ImporterIpv6`<sup>Required</sup> <a name="ImporterIpv6" id="@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.importerIpv6"></a>

```csharp
public string[] ImporterIpv6 { get; }
```

- *Type:* string[]

---

##### `Packages`<sup>Required</sup> <a name="Packages" id="@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.packages"></a>

```csharp
public string[] Packages { get; }
```

- *Type:* string[]

---

##### `PackagesIpv4`<sup>Required</sup> <a name="PackagesIpv4" id="@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.packagesIpv4"></a>

```csharp
public string[] PackagesIpv4 { get; }
```

- *Type:* string[]

---

##### `PackagesIpv6`<sup>Required</sup> <a name="PackagesIpv6" id="@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.packagesIpv6"></a>

```csharp
public string[] PackagesIpv6 { get; }
```

- *Type:* string[]

---

##### `Pages`<sup>Required</sup> <a name="Pages" id="@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.pages"></a>

```csharp
public string[] Pages { get; }
```

- *Type:* string[]

---

##### `PagesIpv4`<sup>Required</sup> <a name="PagesIpv4" id="@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.pagesIpv4"></a>

```csharp
public string[] PagesIpv4 { get; }
```

- *Type:* string[]

---

##### `PagesIpv6`<sup>Required</sup> <a name="PagesIpv6" id="@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.pagesIpv6"></a>

```csharp
public string[] PagesIpv6 { get; }
```

- *Type:* string[]

---

##### `Web`<sup>Required</sup> <a name="Web" id="@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.web"></a>

```csharp
public string[] Web { get; }
```

- *Type:* string[]

---

##### `WebIpv4`<sup>Required</sup> <a name="WebIpv4" id="@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.webIpv4"></a>

```csharp
public string[] WebIpv4 { get; }
```

- *Type:* string[]

---

##### `WebIpv6`<sup>Required</sup> <a name="WebIpv6" id="@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.webIpv6"></a>

```csharp
public string[] WebIpv6 { get; }
```

- *Type:* string[]

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGithubIpRangesConfig <a name="DataGithubIpRangesConfig" id="@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRangesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRangesConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

new DataGithubIpRangesConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRangesConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRangesConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRangesConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRangesConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRangesConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRangesConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRangesConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRangesConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.0.1/docs/data-sources/ip_ranges#id DataGithubIpRanges#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRangesConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRangesConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRangesConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRangesConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRangesConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRangesConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRangesConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRangesConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.0.1/docs/data-sources/ip_ranges#id DataGithubIpRanges#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



