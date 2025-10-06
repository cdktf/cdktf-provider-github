# `dataGithubCodespacesOrganizationPublicKey` Submodule <a name="`dataGithubCodespacesOrganizationPublicKey` Submodule" id="@cdktf/provider-github.dataGithubCodespacesOrganizationPublicKey"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGithubCodespacesOrganizationPublicKey <a name="DataGithubCodespacesOrganizationPublicKey" id="@cdktf/provider-github.dataGithubCodespacesOrganizationPublicKey.DataGithubCodespacesOrganizationPublicKey"></a>

Represents a {@link https://registry.terraform.io/providers/integrations/github/6.6.0/docs/data-sources/codespaces_organization_public_key github_codespaces_organization_public_key}.

#### Initializers <a name="Initializers" id="@cdktf/provider-github.dataGithubCodespacesOrganizationPublicKey.DataGithubCodespacesOrganizationPublicKey.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

new DataGithubCodespacesOrganizationPublicKey(Construct Scope, string Id, DataGithubCodespacesOrganizationPublicKeyConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesOrganizationPublicKey.DataGithubCodespacesOrganizationPublicKey.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesOrganizationPublicKey.DataGithubCodespacesOrganizationPublicKey.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesOrganizationPublicKey.DataGithubCodespacesOrganizationPublicKey.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-github.dataGithubCodespacesOrganizationPublicKey.DataGithubCodespacesOrganizationPublicKeyConfig">DataGithubCodespacesOrganizationPublicKeyConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-github.dataGithubCodespacesOrganizationPublicKey.DataGithubCodespacesOrganizationPublicKey.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-github.dataGithubCodespacesOrganizationPublicKey.DataGithubCodespacesOrganizationPublicKey.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-github.dataGithubCodespacesOrganizationPublicKey.DataGithubCodespacesOrganizationPublicKey.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-github.dataGithubCodespacesOrganizationPublicKey.DataGithubCodespacesOrganizationPublicKeyConfig">DataGithubCodespacesOrganizationPublicKeyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesOrganizationPublicKey.DataGithubCodespacesOrganizationPublicKey.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesOrganizationPublicKey.DataGithubCodespacesOrganizationPublicKey.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesOrganizationPublicKey.DataGithubCodespacesOrganizationPublicKey.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesOrganizationPublicKey.DataGithubCodespacesOrganizationPublicKey.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesOrganizationPublicKey.DataGithubCodespacesOrganizationPublicKey.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesOrganizationPublicKey.DataGithubCodespacesOrganizationPublicKey.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesOrganizationPublicKey.DataGithubCodespacesOrganizationPublicKey.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesOrganizationPublicKey.DataGithubCodespacesOrganizationPublicKey.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesOrganizationPublicKey.DataGithubCodespacesOrganizationPublicKey.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesOrganizationPublicKey.DataGithubCodespacesOrganizationPublicKey.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesOrganizationPublicKey.DataGithubCodespacesOrganizationPublicKey.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesOrganizationPublicKey.DataGithubCodespacesOrganizationPublicKey.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesOrganizationPublicKey.DataGithubCodespacesOrganizationPublicKey.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesOrganizationPublicKey.DataGithubCodespacesOrganizationPublicKey.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesOrganizationPublicKey.DataGithubCodespacesOrganizationPublicKey.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesOrganizationPublicKey.DataGithubCodespacesOrganizationPublicKey.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesOrganizationPublicKey.DataGithubCodespacesOrganizationPublicKey.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesOrganizationPublicKey.DataGithubCodespacesOrganizationPublicKey.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-github.dataGithubCodespacesOrganizationPublicKey.DataGithubCodespacesOrganizationPublicKey.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-github.dataGithubCodespacesOrganizationPublicKey.DataGithubCodespacesOrganizationPublicKey.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-github.dataGithubCodespacesOrganizationPublicKey.DataGithubCodespacesOrganizationPublicKey.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-github.dataGithubCodespacesOrganizationPublicKey.DataGithubCodespacesOrganizationPublicKey.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-github.dataGithubCodespacesOrganizationPublicKey.DataGithubCodespacesOrganizationPublicKey.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-github.dataGithubCodespacesOrganizationPublicKey.DataGithubCodespacesOrganizationPublicKey.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-github.dataGithubCodespacesOrganizationPublicKey.DataGithubCodespacesOrganizationPublicKey.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-github.dataGithubCodespacesOrganizationPublicKey.DataGithubCodespacesOrganizationPublicKey.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-github.dataGithubCodespacesOrganizationPublicKey.DataGithubCodespacesOrganizationPublicKey.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-github.dataGithubCodespacesOrganizationPublicKey.DataGithubCodespacesOrganizationPublicKey.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-github.dataGithubCodespacesOrganizationPublicKey.DataGithubCodespacesOrganizationPublicKey.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.dataGithubCodespacesOrganizationPublicKey.DataGithubCodespacesOrganizationPublicKey.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-github.dataGithubCodespacesOrganizationPublicKey.DataGithubCodespacesOrganizationPublicKey.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.dataGithubCodespacesOrganizationPublicKey.DataGithubCodespacesOrganizationPublicKey.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-github.dataGithubCodespacesOrganizationPublicKey.DataGithubCodespacesOrganizationPublicKey.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.dataGithubCodespacesOrganizationPublicKey.DataGithubCodespacesOrganizationPublicKey.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-github.dataGithubCodespacesOrganizationPublicKey.DataGithubCodespacesOrganizationPublicKey.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.dataGithubCodespacesOrganizationPublicKey.DataGithubCodespacesOrganizationPublicKey.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-github.dataGithubCodespacesOrganizationPublicKey.DataGithubCodespacesOrganizationPublicKey.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.dataGithubCodespacesOrganizationPublicKey.DataGithubCodespacesOrganizationPublicKey.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-github.dataGithubCodespacesOrganizationPublicKey.DataGithubCodespacesOrganizationPublicKey.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.dataGithubCodespacesOrganizationPublicKey.DataGithubCodespacesOrganizationPublicKey.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-github.dataGithubCodespacesOrganizationPublicKey.DataGithubCodespacesOrganizationPublicKey.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.dataGithubCodespacesOrganizationPublicKey.DataGithubCodespacesOrganizationPublicKey.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-github.dataGithubCodespacesOrganizationPublicKey.DataGithubCodespacesOrganizationPublicKey.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.dataGithubCodespacesOrganizationPublicKey.DataGithubCodespacesOrganizationPublicKey.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-github.dataGithubCodespacesOrganizationPublicKey.DataGithubCodespacesOrganizationPublicKey.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.dataGithubCodespacesOrganizationPublicKey.DataGithubCodespacesOrganizationPublicKey.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-github.dataGithubCodespacesOrganizationPublicKey.DataGithubCodespacesOrganizationPublicKey.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.dataGithubCodespacesOrganizationPublicKey.DataGithubCodespacesOrganizationPublicKey.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-github.dataGithubCodespacesOrganizationPublicKey.DataGithubCodespacesOrganizationPublicKey.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesOrganizationPublicKey.DataGithubCodespacesOrganizationPublicKey.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesOrganizationPublicKey.DataGithubCodespacesOrganizationPublicKey.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesOrganizationPublicKey.DataGithubCodespacesOrganizationPublicKey.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesOrganizationPublicKey.DataGithubCodespacesOrganizationPublicKey.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataGithubCodespacesOrganizationPublicKey resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-github.dataGithubCodespacesOrganizationPublicKey.DataGithubCodespacesOrganizationPublicKey.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

DataGithubCodespacesOrganizationPublicKey.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-github.dataGithubCodespacesOrganizationPublicKey.DataGithubCodespacesOrganizationPublicKey.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-github.dataGithubCodespacesOrganizationPublicKey.DataGithubCodespacesOrganizationPublicKey.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

DataGithubCodespacesOrganizationPublicKey.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-github.dataGithubCodespacesOrganizationPublicKey.DataGithubCodespacesOrganizationPublicKey.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-github.dataGithubCodespacesOrganizationPublicKey.DataGithubCodespacesOrganizationPublicKey.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

DataGithubCodespacesOrganizationPublicKey.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-github.dataGithubCodespacesOrganizationPublicKey.DataGithubCodespacesOrganizationPublicKey.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-github.dataGithubCodespacesOrganizationPublicKey.DataGithubCodespacesOrganizationPublicKey.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

DataGithubCodespacesOrganizationPublicKey.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataGithubCodespacesOrganizationPublicKey resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-github.dataGithubCodespacesOrganizationPublicKey.DataGithubCodespacesOrganizationPublicKey.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-github.dataGithubCodespacesOrganizationPublicKey.DataGithubCodespacesOrganizationPublicKey.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGithubCodespacesOrganizationPublicKey to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-github.dataGithubCodespacesOrganizationPublicKey.DataGithubCodespacesOrganizationPublicKey.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGithubCodespacesOrganizationPublicKey that should be imported.

Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.6.0/docs/data-sources/codespaces_organization_public_key#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-github.dataGithubCodespacesOrganizationPublicKey.DataGithubCodespacesOrganizationPublicKey.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataGithubCodespacesOrganizationPublicKey to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesOrganizationPublicKey.DataGithubCodespacesOrganizationPublicKey.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesOrganizationPublicKey.DataGithubCodespacesOrganizationPublicKey.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesOrganizationPublicKey.DataGithubCodespacesOrganizationPublicKey.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesOrganizationPublicKey.DataGithubCodespacesOrganizationPublicKey.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesOrganizationPublicKey.DataGithubCodespacesOrganizationPublicKey.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesOrganizationPublicKey.DataGithubCodespacesOrganizationPublicKey.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesOrganizationPublicKey.DataGithubCodespacesOrganizationPublicKey.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesOrganizationPublicKey.DataGithubCodespacesOrganizationPublicKey.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesOrganizationPublicKey.DataGithubCodespacesOrganizationPublicKey.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesOrganizationPublicKey.DataGithubCodespacesOrganizationPublicKey.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesOrganizationPublicKey.DataGithubCodespacesOrganizationPublicKey.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesOrganizationPublicKey.DataGithubCodespacesOrganizationPublicKey.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesOrganizationPublicKey.DataGithubCodespacesOrganizationPublicKey.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesOrganizationPublicKey.DataGithubCodespacesOrganizationPublicKey.property.keyId">KeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesOrganizationPublicKey.DataGithubCodespacesOrganizationPublicKey.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesOrganizationPublicKey.DataGithubCodespacesOrganizationPublicKey.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-github.dataGithubCodespacesOrganizationPublicKey.DataGithubCodespacesOrganizationPublicKey.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-github.dataGithubCodespacesOrganizationPublicKey.DataGithubCodespacesOrganizationPublicKey.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-github.dataGithubCodespacesOrganizationPublicKey.DataGithubCodespacesOrganizationPublicKey.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-github.dataGithubCodespacesOrganizationPublicKey.DataGithubCodespacesOrganizationPublicKey.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-github.dataGithubCodespacesOrganizationPublicKey.DataGithubCodespacesOrganizationPublicKey.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-github.dataGithubCodespacesOrganizationPublicKey.DataGithubCodespacesOrganizationPublicKey.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-github.dataGithubCodespacesOrganizationPublicKey.DataGithubCodespacesOrganizationPublicKey.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-github.dataGithubCodespacesOrganizationPublicKey.DataGithubCodespacesOrganizationPublicKey.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-github.dataGithubCodespacesOrganizationPublicKey.DataGithubCodespacesOrganizationPublicKey.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-github.dataGithubCodespacesOrganizationPublicKey.DataGithubCodespacesOrganizationPublicKey.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-github.dataGithubCodespacesOrganizationPublicKey.DataGithubCodespacesOrganizationPublicKey.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-github.dataGithubCodespacesOrganizationPublicKey.DataGithubCodespacesOrganizationPublicKey.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-github.dataGithubCodespacesOrganizationPublicKey.DataGithubCodespacesOrganizationPublicKey.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `KeyId`<sup>Required</sup> <a name="KeyId" id="@cdktf/provider-github.dataGithubCodespacesOrganizationPublicKey.DataGithubCodespacesOrganizationPublicKey.property.keyId"></a>

```csharp
public string KeyId { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-github.dataGithubCodespacesOrganizationPublicKey.DataGithubCodespacesOrganizationPublicKey.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-github.dataGithubCodespacesOrganizationPublicKey.DataGithubCodespacesOrganizationPublicKey.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesOrganizationPublicKey.DataGithubCodespacesOrganizationPublicKey.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-github.dataGithubCodespacesOrganizationPublicKey.DataGithubCodespacesOrganizationPublicKey.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGithubCodespacesOrganizationPublicKeyConfig <a name="DataGithubCodespacesOrganizationPublicKeyConfig" id="@cdktf/provider-github.dataGithubCodespacesOrganizationPublicKey.DataGithubCodespacesOrganizationPublicKeyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.dataGithubCodespacesOrganizationPublicKey.DataGithubCodespacesOrganizationPublicKeyConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

new DataGithubCodespacesOrganizationPublicKeyConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesOrganizationPublicKey.DataGithubCodespacesOrganizationPublicKeyConfig.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesOrganizationPublicKey.DataGithubCodespacesOrganizationPublicKeyConfig.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesOrganizationPublicKey.DataGithubCodespacesOrganizationPublicKeyConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesOrganizationPublicKey.DataGithubCodespacesOrganizationPublicKeyConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesOrganizationPublicKey.DataGithubCodespacesOrganizationPublicKeyConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesOrganizationPublicKey.DataGithubCodespacesOrganizationPublicKeyConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesOrganizationPublicKey.DataGithubCodespacesOrganizationPublicKeyConfig.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesOrganizationPublicKey.DataGithubCodespacesOrganizationPublicKeyConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.6.0/docs/data-sources/codespaces_organization_public_key#id DataGithubCodespacesOrganizationPublicKey#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-github.dataGithubCodespacesOrganizationPublicKey.DataGithubCodespacesOrganizationPublicKeyConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-github.dataGithubCodespacesOrganizationPublicKey.DataGithubCodespacesOrganizationPublicKeyConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-github.dataGithubCodespacesOrganizationPublicKey.DataGithubCodespacesOrganizationPublicKeyConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-github.dataGithubCodespacesOrganizationPublicKey.DataGithubCodespacesOrganizationPublicKeyConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-github.dataGithubCodespacesOrganizationPublicKey.DataGithubCodespacesOrganizationPublicKeyConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-github.dataGithubCodespacesOrganizationPublicKey.DataGithubCodespacesOrganizationPublicKeyConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-github.dataGithubCodespacesOrganizationPublicKey.DataGithubCodespacesOrganizationPublicKeyConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-github.dataGithubCodespacesOrganizationPublicKey.DataGithubCodespacesOrganizationPublicKeyConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.6.0/docs/data-sources/codespaces_organization_public_key#id DataGithubCodespacesOrganizationPublicKey#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



